## SPL Token

### Overview

SPL Token creates a fungible asset through Solana's original Token Program. It is the most established Solana token option and is widely recognized by wallets, explorers, exchanges, DEXs and dApps. Token identity and project information are published through Metaplex metadata backed by an IPFS-hosted JSON document.

### When to use it

Choose SPL Token when broad compatibility with existing Solana tooling is the priority. It is a strong fit for community tokens, utility assets, loyalty points, in-game currencies and launches that need predictable token behavior without depending on newer token-program extensions.

### How it works

Deployment creates a new mint account and mints the complete initial supply to the associated token account owned by the wallet that approves the transaction. You define the name, symbol, decimals and supply, and can add an optional logo, description, tags and project links. The generator uploads the optional assets and metadata JSON to IPFS immediately before deployment, then references that data through Metaplex metadata.

### Key features

- Uses Solana's original Token Program for established ecosystem compatibility.
- Supports a custom name, symbol, decimals and initial supply.
- Supports optional logo, description, tags and project links through Metaplex metadata and IPFS.
- Can permanently revoke mint authority to prevent any future supply increase.
- Can permanently revoke freeze authority so token accounts cannot be frozen later.
- Can permanently revoke metadata update authority to make the token identity immutable.
- Sends the complete initial supply to the connected wallet's associated token account.

### Considerations

- Decimals cannot be changed after the mint is created.
- Authority revocations are permanent. Verify every setting and test the complete flow on Solana devnet before deploying on mainnet.
- Wallet and explorer presentation depends on their support for Metaplex metadata and IPFS gateways.
- Creating the token does not automatically create a DEX market or liquidity pool.
