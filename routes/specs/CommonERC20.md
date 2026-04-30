## CommonERC20

### Overview

CommonERC20 is a balanced token model that combines three widely used properties: a capped maximum supply, owner-controlled minting, and burning. It is designed for projects that want issuance flexibility without giving up a hard upper bound on supply. For buyers, it offers a more structured version of a mintable token because expansion is possible, but only within a predefined ceiling.

### When to use it

This model is a good fit for utility ecosystems, loyalty programs, game economies, community platforms, and treasury-backed projects that may need to issue tokens over time but still want to communicate a credible maximum supply. It is particularly useful when the roadmap includes staged releases, rewards, or reserved allocations.

### How it works

The token is deployed with a custom name, symbol, decimals value, cap, and initial supply. The initial supply is minted at deployment, and the owner can later create additional tokens as long as the total supply does not exceed the cap. At any time, tokens can also be burned, which reduces total supply. Once the owner decides the issuance phase is over, minting can be permanently disabled. After that point, no new tokens can ever be created, even though burning remains available.

### Key features

- Users get standard ERC-20 transfers, approvals, and allowance-based spending.
- The owner can issue more tokens after launch, but only up to the predefined maximum supply.
- The owner can permanently close the minting phase, giving the market a final supply ceiling with no future issuance.
- Holders or approved spenders can burn tokens, allowing the circulating amount to fall over time.
- The token exposes custom decimals so the project can choose how granular balances should be.

### Considerations

- Supply is not fixed at launch because more tokens can be issued until minting is ended.
- The cap gives stronger supply discipline than an uncapped mintable token.
- Buyers should evaluate both the remaining mintable capacity and the trust model around the owner.
