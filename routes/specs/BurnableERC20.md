## BurnableERC20

### Overview

BurnableERC20 is a straightforward ERC-20 token with one major extension: tokens can be permanently destroyed. It keeps the simplicity of a fixed-supply launch while adding a mechanism that allows supply to decrease over time. For buyers, this means the token starts in a predictable way but can become scarcer if holders or approved operators burn part of the supply.

### When to use it

This model works well for projects that want a clean ERC-20 profile with no post-launch minting, but still want burning for redemption flows, scarcity mechanics, treasury operations, or community-driven supply reduction. It is a good middle ground between a purely static token and more complex tokenomics.

### How it works

The contract is deployed with a custom name, symbol, decimals value, and initial supply. That supply is minted at deployment and no extra minting entry points are exposed afterward, so the contract cannot increase supply post-launch. The token inherits standard ERC-20 transfers and allowances, and adds burn behavior that lets a holder destroy their own tokens or lets an approved spender destroy tokens using an allowance. Because burning removes tokens permanently, total supply can only stay the same or go down.

### Key features

- Users get standard ERC-20 transfers, approvals, and allowance-based spending.
- Holders can permanently destroy part of their own balances.
- Approved spenders can destroy tokens on behalf of a holder when an allowance is available.
- The token exposes custom decimals, which allows the project to define the desired precision from launch.

### Considerations

- Supply cannot increase through this contract after deployment.
- Burning is irreversible and permanently reduces total supply.
- This model is easy to understand and suitable for projects that want simplicity with a built-in deflation option.
