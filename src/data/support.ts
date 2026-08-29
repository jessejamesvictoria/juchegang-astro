import config from './support.config.json'

export interface SupportNetwork {
  name: string
  chainId: number
  explorer: string
}

export interface SupportAsset {
  symbol: string
  contract: string
  decimals: number
}

export const recipientAddress: string = config.recipientAddress
export const network: SupportNetwork = config.network
export const asset: SupportAsset = config.asset
export const presetAmounts: number[] = config.presetAmounts
export const x402Facilitator: string = config.x402Facilitator

const ADDRESS_PATTERN = /^0x[0-9a-fA-F]{40}$/

/**
 * False while support.config.json still holds the placeholder. Every surface
 * that would otherwise render an address checks this first and shows a
 * "not configured" state instead, so the site can never publish a QR code
 * pointing at a wallet nobody controls.
 */
export const isConfigured: boolean = ADDRESS_PATTERN.test(recipientAddress)

/**
 * Filename slug for one QR variant. Must stay in step with the matching
 * function in scripts/generate-payment-qr.py.
 */
export function qrSlug(amount?: number): string {
  return amount === undefined ? 'any' : String(amount).replace('.', '-')
}

export function qrPath(amount?: number): string {
  return `/pay/base-usdc-${qrSlug(amount)}.svg`
}

/**
 * Build an EIP-681 payment request for a USDC transfer on Base.
 *
 *   ethereum:<token>@<chainId>/transfer?address=<recipient>[&uint256=<baseUnits>]
 *
 * The target of the URI is the TOKEN CONTRACT and the recipient is the
 * `address` argument to transfer(). Putting the recipient in the target slot
 * with a `value` parameter — the shape that looks intuitive — instead asks the
 * wallet to send native ETH, which is how these links quietly deliver nothing.
 *
 * Naming the chain and the token in the URI also stops the most common way a
 * payment is lost for good: the sender picking Ethereum mainnet by hand.
 */
export function paymentUri(amount?: number): string {
  const uri = `ethereum:${asset.contract}@${network.chainId}/transfer?address=${recipientAddress}`
  if (amount === undefined) return uri
  const baseUnits = BigInt(Math.round(amount * 10 ** asset.decimals))
  return `${uri}&uint256=${baseUnits}`
}

export function explorerUrl(): string {
  return `${network.explorer}/address/${recipientAddress}`
}

/** 0x14E6…4D54 — long addresses, shortened for display without losing the ends. */
export function truncateAddress(address: string): string {
  return address.length > 14
    ? `${address.slice(0, 8)}…${address.slice(-6)}`
    : address
}
