## Token 2022

### Overview

Token 2022 creates a fungible asset through Solana's newer Token Extensions Program. The generator uses the Metadata Pointer and Token Metadata extensions for native metadata handling, backed by an IPFS-hosted JSON document. It provides a modern, extension-ready foundation for applications that support the newer program.

### When to use it

Choose Token 2022 when you want to build on the Token Extensions Program and have confirmed support across every wallet, explorer, exchange, DEX and dApp that the project plans to use. It is well suited to experimental assets, extension-ready projects and teams targeting Solana's evolving token standard.

### How it works

Deployment creates a Token 2022 mint with Metadata Pointer and Token Metadata extensions, then mints the complete initial supply to the associated token account owned by the wallet that approves the transaction. You define the name, symbol, decimals and supply, and can add an optional logo, description, tags and project links. The generator uploads the optional assets and metadata JSON to IPFS immediately before deployment and stores the resulting reference through the mint's metadata extensions.

### Key features

- Uses Solana's Token Extensions Program.
- Uses Metadata Pointer and Token Metadata extensions for native metadata handling.
- Supports a custom name, symbol, decimals and initial supply.
- Supports optional logo, description, tags and project links backed by IPFS.
- Can permanently revoke mint authority to prevent any future supply increase.
- Can permanently revoke freeze authority so token accounts cannot be frozen later.
- Can permanently revoke metadata update authority to make the token identity immutable.
- Sends the complete initial supply to the connected wallet's associated token account.

### Considerations

- Token 2022 support is not universal. Confirm compatibility with every service the token must use before selecting it.
- Decimals cannot be changed after the mint is created.
- Authority revocations are permanent. Verify every setting and test the complete flow on Solana devnet before deploying on mainnet.
- Wallet and explorer presentation depends on support for Token 2022 metadata extensions and IPFS gateways.
- Creating the token does not automatically create a DEX market or liquidity pool.
