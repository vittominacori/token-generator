## StarterERC20

### Overview

StarterERC20 is a simple fixed-supply token designed for basic launches and easy onboarding. It intentionally avoids advanced mechanics so users can immediately understand what they are buying. For buyers, it behaves like a standard ERC-20 with a predefined supply and no hidden complexity in supply management or transfer rules.

### When to use it

This model is useful for simple communities, starter projects, proofs of concept, educational deployments, and low-complexity utility tokens. It is best when the token itself should remain minimal and the emphasis should stay on accessibility rather than custom features.

### How it works

The contract mints exactly 21,000,000 tokens with 18 decimals to the initial owner during deployment. After that, it exposes no derived public or external management functions. Users interact with it through the standard ERC-20 transfer, approval, and allowance mechanisms inherited from the base token implementation. The contract also includes an on-chain reference to the token generator that was used to create it.

### Key features

- Users can transfer tokens, approve spenders, and use allowances in the standard ERC-20 way.
- The full supply of `21,000,000` tokens is created at deployment.
- The token uses 18 decimals, which matches the most common ERC-20 display format.
- The contract includes a reference to the token generator used for deployment.
- There are no built-in minting, burning, tax, pause, blacklist, or reflection mechanics.

### Considerations

- Supply is fixed and easy to verify from launch.
- The model favors simplicity and familiarity over advanced product behavior.
- This is a good choice when buyers should not need to understand specialized tokenomics.
