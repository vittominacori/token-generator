## AntiWhaleERC20

### Overview

AntiWhaleERC20 is designed for projects that want to limit token concentration and encourage broader distribution across many wallets. Its defining characteristic is a wallet-balance limit that restricts how much of the total supply a single receiving address can hold. For buyers, this creates a token environment where large accumulation can be intentionally constrained.

### When to use it

This model is useful for community launches, fair-distribution strategies, meme tokens, early-stage ecosystems, and projects that want to discourage dominant holders from building oversized positions too quickly. It is especially relevant when the project narrative emphasizes decentralization of ownership rather than unrestricted accumulation.

### How it works

The contract is deployed with a custom name, symbol, decimals value, initial supply, and a percentage-based wallet cap. The anti-whale rule is checked when tokens are received, so a transfer can fail if it would push the recipient above the allowed threshold. The owner can later update the balance limit and can exclude specific addresses from the rule, which is typically useful for treasury wallets, liquidity pools, exchange addresses, or operational accounts.

### Key features

- Users get standard ERC-20 transfers and approvals, but incoming transfers are checked against the wallet holding limit.
- Large purchases or transfers can be blocked automatically when they would make a wallet hold too much of the supply.
- The owner can increase, reduce, or effectively disable the maximum wallet threshold over time.
- The owner can exempt selected wallets from the limit, which is often necessary for liquidity, treasury, or infrastructure addresses.
- The token exposes custom decimals, so balances can be displayed using the chosen level of precision.

### Considerations

- Buyers may be unable to complete large purchases if the wallet cap would be exceeded.
- The owner retains meaningful control over how strict the anti-whale policy remains after launch.
- This model prioritizes distribution control over unrestricted market behavior.
