## PayableERC20

### Overview

PayableERC20 is a token built for application-driven usage rather than simple holding alone. Its main difference from a standard ERC-20 is that token transfers and approvals can trigger immediate callbacks on compatible smart contracts. For buyers, this means the token is well suited to ecosystems where sending tokens is meant to perform an action, not just move value.

### When to use it

This model is useful for dApps, marketplaces, staking systems, subscriptions, automated purchase flows, token-gated services, and other products where the token needs to interact directly with contracts in a single transaction. It is a good fit when user experience depends on reducing manual multi-step flows.

### How it works

The token is deployed with a custom name, symbol, decimals value, and initial supply. It keeps standard ERC-20 compatibility for wallets and exchanges, but it also supports ERC-1363 interaction patterns. With those patterns, a user can send tokens to a compatible contract and have that contract react immediately, or approve a contract and notify it in the same flow. The result is a token that works well in programmable product experiences.

### Key features

- Users can transfer tokens, approve spenders, and use allowances like with any standard ERC-20.
- Users can send tokens to a compatible contract and trigger that contract’s receive logic immediately.
- Users can spend tokens from an existing allowance and trigger a compatible contract in the same flow.
- Users can approve a compatible spender contract and notify it at the same time.
- The token exposes custom decimals so the project can define how balances are displayed.

### Considerations

- Supply is fixed after deployment because the contract does not add post-launch minting controls.
- The token’s extra value appears mainly in ecosystems that actively support compatible contract callbacks.
- In wallets or exchanges that treat it as a standard ERC-20, users may not notice the advanced interaction features immediately.
