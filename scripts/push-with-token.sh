#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Set GITHUB_TOKEN to a PAT with repo scope, then rerun:"
  echo "  GITHUB_TOKEN=ghp_xxx ./scripts/push-with-token.sh"
  exit 1
fi

cd "$(dirname "$0")/.."
git push "https://x-access-token:${GITHUB_TOKEN}@github.com/jessejamesvictoria/juchegang-astro.git" main
echo "Pushed to origin/main"