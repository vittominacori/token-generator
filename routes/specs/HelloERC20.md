## HelloERC20

### Overview

HelloERC20 is one of the simplest token models in the repository. It is a fixed-supply ERC-20 with no advanced permissions, no fee logic, no minting after launch, and no transfer restrictions. For buyers, it is easy to understand because the token behaves like a standard transferable asset with a predefined supply from day one.

### When to use it

This model is useful for demonstrations, educational examples, simple community tokens, lightweight utility tokens, and any project that values predictability over advanced token mechanics. It is especially appropriate when the goal is to keep the buyer experience as clear and familiar as possible.

### How it works

The contract mints exactly 10,000 tokens with 18 decimals to the initial owner during deployment. After that, the contract exposes only the standard ERC-20 behavior inherited from the base implementation, such as transfers, approvals, and allowances. There are no derived public or external management functions that can change token behavior after launch. The contract also includes an on-chain reference to the token generator that was used to create it.

### Key features

- Users can transfer tokens, approve spenders, and use allowances in the standard ERC-20 way.
- The full supply is created at deployment and does not grow later.
- The token uses 18 decimals, which aligns with the most common ERC-20 display format.
- The contract includes a reference to the token generator used for deployment.
- There are no built-in taxes, burns, pauses, blacklists, or supply-management controls.

### Considerations

- Supply is fixed at exactly `10,000` tokens from launch.
- The token is intentionally minimal and does not include advanced utility beyond standard ERC-20 behavior.
- This is one of the easiest models for non-technical buyers to evaluate.
