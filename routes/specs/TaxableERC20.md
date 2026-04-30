## TaxableERC20

### Overview

TaxableERC20 is a transfer-fee token that routes part of eligible transactions to a designated receiver wallet. It is intended for projects that want token activity to contribute directly to treasury funding, operations, rewards, or ecosystem maintenance. For buyers, the main difference from a standard ERC-20 is that transfers can involve an automatic deduction.

### When to use it

This model is useful when the project wants token transfers to produce ongoing economic value for a treasury, protocol wallet, reward distributor, or other designated destination. It is often used in community tokens, treasury-backed ecosystems, and projects that want activity-based funding.

### How it works

The token is deployed with a custom name, symbol, decimals value, initial supply, tax percentage, and tax receiver address. On eligible transfers, part of the transferred amount is redirected to the designated receiver instead of going to the intended recipient. The owner can change the tax rate, change the receiver wallet, or exempt selected addresses from the tax logic. As a result, transfer behavior can evolve over time while the token remains compatible with standard ERC-20 infrastructure.

### Key features

- Users can transfer tokens and use approvals as with a normal ERC-20, but eligible transfers can include an automatic tax.
- Recipients may receive less than the nominal transfer amount because part of the value can be redirected.
- The owner can change the active tax percentage over time, including reducing it to zero.
- The owner can update the wallet that receives collected tax.
- The owner can exempt selected addresses from paying the tax.
- The token exposes custom decimals so balances can be presented using the project’s preferred precision.

### Considerations

- Transfer costs are built into token behavior, so users should understand the current fee settings before transacting.
- The owner can materially change transfer economics by changing the tax rate, tax receiver, or exemptions.
- This model can support treasury growth, but it introduces friction compared with a plain ERC-20.
