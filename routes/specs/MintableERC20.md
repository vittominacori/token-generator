## MintableERC20

### Overview

MintableERC20 is a capped token that supports future issuance under owner control. It offers a practical compromise between flexibility and supply discipline: the project can expand supply after launch, but only up to a maximum that is fixed in the contract. For buyers, this means the token is not static, yet it still has a hard supply boundary.

### When to use it

This model is useful for ecosystems that need staged distribution, reward programs, treasury allocations, growth incentives, or delayed issuance tied to roadmap milestones. It is a good fit when the team wants more operational freedom than a fixed-supply token, but also wants a clear supply ceiling.

### How it works

The token is deployed with a custom name, symbol, decimals value, initial supply, and cap. The owner can mint new tokens over time until the cap is reached. Once the project no longer needs issuance flexibility, the owner can permanently disable minting. From that point onward, the supply becomes effectively fixed because no further minting is possible. The token otherwise behaves like a standard ERC-20 for transfers and allowances.

### Key features

- Users get normal ERC-20 transfers, approvals, and allowance-based spending.
- The owner can create additional tokens after launch while staying within the contract’s maximum supply.
- The owner can permanently shut off future minting.
- The token exposes custom decimals, so the project can choose the precision of balances and amounts.

### Considerations

- Supply can increase after launch until minting is permanently ended.
- The cap gives buyers a clear upper bound, but not a fixed circulating supply from day one.
- Buyer confidence may depend on how transparently the project communicates future issuance plans.
