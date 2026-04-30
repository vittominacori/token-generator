## PermitERC20

### Overview

PermitERC20 is a standard transferable token that improves user experience around approvals. Its core advantage is that it lets a holder authorize spending with an off-chain signature instead of first submitting a separate on-chain approval transaction. For buyers, this does not change the tokenomics, but it does make the token easier to use in modern DeFi and wallet flows.

### When to use it

This model is useful for tokens that are expected to be used with exchanges, DeFi protocols, payment interfaces, and wallets that support signature-based approvals. It is especially valuable when the project wants to reduce friction for users who frequently interact with smart contracts.

### How it works

The token is deployed with a name, symbol, and fixed initial supply. After launch, it behaves like a standard ERC-20 for transfers and allowances, but it also supports ERC-2612 permit functionality. Instead of calling an on-chain approval first, a holder can sign an approval message off-chain and have another party submit it on-chain. The contract also exposes its EIP-712 domain separator, which integrations use to prepare and verify these signed messages.

### Key features

- Users can transfer tokens and manage allowances using the standard ERC-20 model.
- Users can authorize spending through an off-chain signature, which can reduce the need for a separate approval transaction.
- Wallets and dApps can rely on exposed signature-domain data to build compatible permit flows.
- Supply is fixed from launch, so the token focuses on UX improvements rather than expandable issuance.

### Considerations

- The main advantage is smoother contract interaction, not special tokenomics.
- The benefit is strongest when wallets and applications actively support permit flows.
- Buyers who only hold or transfer tokens manually may not interact with the signature features directly.
