## StandardERC20

### Overview

StandardERC20 is a fixed-supply token that stays close to the ERC-20 standard while allowing the project to define a custom decimals value. Its purpose is to give teams a familiar token model without forcing them into the default 18-decimal precision. For buyers, it is still a simple token, but one whose unit display may differ from the most common convention.

### When to use it

This model is useful when the project wants a plain ERC-20 with a one-time initial supply and no advanced management controls, but needs a decimals format that better matches the business model, user interface, or accounting logic of the token.

### How it works

The token is deployed with a custom name, symbol, decimals value, and initial supply. That supply is minted once to the initial owner. After deployment, the contract does not add any public or external management functions beyond inherited ERC-20 behavior, so there is no post-launch minting, pausing, taxation, or restriction logic. The main configurable aspect that remains visible to users is the decimals setting.

### Key features

- Users can transfer tokens, approve spenders, and use allowances like with a standard ERC-20.
- The full supply is created at deployment and does not increase later through this contract.
- The project can choose a custom decimals value, which affects how wallets and interfaces present balances and amounts.
- The model avoids extra transfer logic, making it easy to understand and broadly compatible.

### Considerations

- Supply is fixed from launch.
- The token’s main differentiator is precision control rather than tokenomics or administrative behavior.
- Buyers and integrators should confirm the decimals value so displayed balances are interpreted correctly.
