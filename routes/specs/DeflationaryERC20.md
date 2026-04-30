## DeflationaryERC20

### Overview

DeflationaryERC20 is built for token economies where every qualifying transfer can reduce total supply automatically. Instead of relying only on voluntary burns, the token embeds a burn mechanism directly into transfer activity. For buyers, this creates a token whose supply can shrink as usage increases, making transfer behavior part of the tokenomics.

### When to use it

This model is useful for projects that want activity-driven scarcity, long-term deflationary pressure, or a narrative centered on reducing supply through usage. It can fit speculative communities, utility tokens with frequent transfers, and projects that want holders to view on-chain activity as economically meaningful.

### How it works

The token is deployed with a custom name, symbol, decimals value, initial supply, and burn fee percentage. On eligible transfers, part of the transferred amount is burned automatically instead of being delivered to the recipient. This means a sender may initiate one amount while the recipient receives less and total supply declines at the same time. The owner can later change the burn percentage or exempt selected addresses from the burn mechanism, which is often useful for treasury wallets, liquidity pools, or operational accounts.

### Key features

- Users get standard ERC-20 transfers and approvals, but transfers can automatically reduce total supply.
- Recipients may receive less than the full sent amount because a portion can be burned during transfer.
- The owner can adjust the burn percentage over time, including reducing it to zero.
- The owner can exempt selected wallets from the automatic burn logic.
- The token exposes custom decimals so the project can define the preferred balance precision.

### Considerations

- Transfer outcomes depend on the active burn settings, so user-visible balances and received amounts can differ from the nominal transfer input.
- Supply decreases through regular token activity, not only through voluntary burns.
- The owner can materially change transfer economics by changing the burn fee or exclusions.
