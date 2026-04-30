## UnlimitedERC20

### Overview

UnlimitedERC20 is an expandable-supply token with burn support and no hard cap. It is built for projects that want long-term issuance flexibility and do not want to commit to a maximum supply in the contract. For buyers, this is one of the most supply-flexible models in the repository.

### When to use it

This model is useful for rewards systems, loyalty programs, utility ecosystems, and platforms where token issuance may continue for an extended period or depend on future usage. It is also relevant when the project wants multiple authorized issuers rather than a single owner-controlled mint flow.

### How it works

The token is deployed with a custom name, symbol, decimals value, and initial supply. Addresses with the minter role can create additional tokens at any time because no supply cap is enforced. The owner can later shut off minting permanently, but until that happens the token remains open to further issuance. The token also supports burning, which means supply can decrease as well. In practice, supply can move up or down over time depending on how the project uses its minting and burning powers.

### Key features

- Users get standard ERC-20 transfers, approvals, and allowance-based spending.
- Authorized minters can create new supply after launch without a maximum cap.
- The owner can permanently disable future minting.
- Holders or approved spenders can burn tokens, reducing supply.
- The token exposes custom decimals, giving the project control over display precision.

### Considerations

- There is no hard maximum supply enforced by the contract.
- Issuance is role-based, so more than one address may have the power to mint.
- Buyers should pay close attention to governance, role management, and the project’s issuance policy.
