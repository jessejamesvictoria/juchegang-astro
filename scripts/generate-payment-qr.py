#!/usr/bin/env python3
"""
Generate the scan-to-pay QR codes for /support.

Reads src/data/support.config.json and writes one SVG (for the page) and one
PNG (for posting to Telegram, Instagram, print) per amount into public/pay/.

The codes are generated here, at build time, and committed. They are
deliberately NOT fetched from a QR-rendering service at page load: a third
party that renders your payment QR is a third party that can swap the address
in it, and every visitor would scan the swapped one. The whole point of this
payment path is that nobody sits between the payer and the wallet, so the
image cannot come from someone else's server either.

Usage:
    python3 scripts/generate-payment-qr.py
    python3 scripts/generate-payment-qr.py --skip-checksum   # all-lowercase address

Requires: pip install segno pycryptodome
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

try:
    import segno
except ImportError:
    sys.exit("missing dependency: pip install segno")

try:
    from Crypto.Hash import keccak
except ImportError:
    sys.exit("missing dependency: pip install pycryptodome")

ROOT = Path(__file__).resolve().parent.parent
CONFIG_PATH = ROOT / "src" / "data" / "support.config.json"
OUTPUT_DIR = ROOT / "public" / "pay"

INK = "#050505"
PAPER = "#F4F4F0"
ADDRESS_PATTERN = re.compile(r"^0x[0-9a-fA-F]{40}$")


def to_eip55(address: str) -> str:
    """Canonical EIP-55 mixed-case form of a 0x address."""
    body = address[2:].lower()
    digest = keccak.new(digest_bits=256)
    digest.update(body.encode())
    h = digest.hexdigest()
    return "0x" + "".join(
        char.upper() if int(h[i], 16) >= 8 else char for i, char in enumerate(body)
    )


def check_address(address: str, skip_checksum: bool) -> None:
    """Fail loudly rather than render a QR code aimed at the wrong wallet."""
    if not ADDRESS_PATTERN.match(address):
        sys.exit(
            f"refusing to generate: recipientAddress is {address!r}, which is not a\n"
            f"0x-prefixed 40-character address. Set a real one in {CONFIG_PATH.name}."
        )

    if address == address.lower() or address == address.upper():
        if not skip_checksum:
            print(
                "  note: address is single-case, so it carries no EIP-55 checksum to\n"
                "        verify. Compare it against your wallet by eye before publishing."
            )
        return

    canonical = to_eip55(address)
    if address != canonical and not skip_checksum:
        wrong = [i for i, (a, b) in enumerate(zip(address, canonical)) if a != b]
        sys.exit(
            f"refusing to generate: EIP-55 checksum failed.\n"
            f"  configured: {address}\n"
            f"  canonical:  {canonical}\n"
            f"  mismatched at position(s): {wrong}\n"
            f"This almost always means the address was mistyped. Re-copy it from your\n"
            f"wallet. Pass --skip-checksum only if you are certain the address is right."
        )


def payment_uri(config: dict, amount: float | None) -> str:
    """
    EIP-681 request for an ERC-20 transfer:

        ethereum:<token>@<chainId>/transfer?address=<recipient>[&uint256=<baseUnits>]

    The URI target is the token contract; the recipient is the `address`
    argument to transfer(). The intuitive-looking alternative — recipient as
    target, amount in a `value` parameter — asks the wallet for native ETH
    instead, and quietly delivers nothing.
    """
    asset = config["asset"]
    uri = (
        f"ethereum:{asset['contract']}@{config['network']['chainId']}"
        f"/transfer?address={config['recipientAddress']}"
    )
    if amount is None:
        return uri
    base_units = int(round(amount * 10 ** asset["decimals"]))
    return f"{uri}&uint256={base_units}"


def slug(amount: float | None) -> str:
    """Must stay in step with qrSlug() in src/data/support.ts."""
    if amount is None:
        return "any"
    text = f"{amount:g}"
    return text.replace(".", "-")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--skip-checksum",
        action="store_true",
        help="bypass EIP-55 validation (only if you are certain the address is right)",
    )
    args = parser.parse_args()

    config = json.loads(CONFIG_PATH.read_text())
    address = config["recipientAddress"]
    asset, network = config["asset"], config["network"]

    print(f"recipient : {address}")
    print(f"network   : {network['name']} (chain {network['chainId']})")
    print(f"asset     : {asset['symbol']} @ {asset['contract']}")
    check_address(address, args.skip_checksum)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    amounts: list[float | None] = [None, *config["presetAmounts"]]

    print(f"\nwriting {len(amounts) * 2} files to {OUTPUT_DIR.relative_to(ROOT)}/")
    for amount in amounts:
        uri = payment_uri(config, amount)
        name = f"base-usdc-{slug(amount)}"
        label = "any amount" if amount is None else f"${amount:g}"

        # Error level M is the payment-QR norm: enough redundancy for a phone
        # camera at an angle without inflating the module count.
        qr = segno.make(uri, error="m")

        qr.save(
            OUTPUT_DIR / f"{name}.svg",
            scale=1,
            border=4,
            dark=INK,
            light=PAPER,
            omitsize=True,
            svgclass=None,
            lineclass=None,
        )
        qr.save(OUTPUT_DIR / f"{name}.png", scale=12, border=4, dark=INK, light=PAPER)

        print(f"  {name:22} {label:12} v{qr.version}-{qr.error.upper()}  {uri}")

    print("\ndone. Scan one with the wallet you actually use before publishing.")


if __name__ == "__main__":
    main()
