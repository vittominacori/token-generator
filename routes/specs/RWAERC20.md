## RWAERC20

### Overview

RWAERC20 is a permissioned ERC20 model built for regulated, managed, or otherwise restricted asset environments, including real-world asset tokenization. Its core logic is centered on wallet whitelisting, ERC-7943 transfer checks, account freezing, token-level freezing, controlled issuance, controlled destruction, and operator intervention. For buyers, this is a token designed for compliance and operational control rather than open, permissionless circulation.

### When to use it

This model is appropriate when the issuer needs to decide which wallets may hold the token, freeze accounts when necessary, freeze a specific amount of tokens, batch-manage many addresses, or intervene in token movement for administrative or legal reasons. It is a natural fit for security-style products, regulated investment assets, restricted memberships, and tokenized real-world assets with eligibility requirements.

### How it works

The token is deployed with a custom name, symbol, decimals value, and initial supply. The initial owner is whitelisted from the start, and only whitelisted accounts can normally hold and transfer the token. Privileged verifiers can add or remove wallets from the whitelist, including in batch. Privileged agents can freeze or unfreeze accounts, set an account’s ERC-7943 frozen token amount, force transfers between whitelisted wallets, and perform forced minting or forced burning for whitelisted addresses. Privileged issuers can mint and burn through normal controlled flows, and managers can pause or unpause standard user transfers and permanently stop future minting. Taken together, these functions create a token that behaves more like a managed register of ownership than a completely open-market asset.

The ERC-7943 view functions expose policy eligibility before an operation is attempted. `canSend` checks whether an account is whitelisted and not account-frozen, `canReceive` checks whether a recipient is whitelisted and not account-frozen, and `canTransfer` combines both checks with the sender’s unfrozen token balance. `canTransfer` is not a replacement for ERC-20 balance or allowance checks: if an amount is above the sender’s balance, the ERC-20 transfer or burn path handles that failure.

Normal transfers require both the sender and receiver to be whitelisted and not account-frozen. Normal minting requires the receiving account to be whitelisted and not account-frozen. Normal burning requires the source account to be whitelisted and not account-frozen. Normal transfers and burns can only consume unfrozen token amounts. If an account’s frozen token amount is greater than its balance, its unfrozen balance is treated as zero for these normal flows.

Forced transfers, forced minting, and forced burning are operator extensions. Forced transfers require both addresses to be whitelisted and the receiver to be able to receive tokens, but they may operate even if the sender is account-frozen or the transfer consumes frozen token amounts. Forced minting and forced burning require the target account to be whitelisted and may operate even if that account is account-frozen. Forced transfers and forced burns reduce the sender’s frozen token amount when the intervention consumes frozen tokens.

### Key features

- Only whitelisted wallets are allowed to hold and transfer the token under normal conditions.
- Privileged verifiers can add or remove eligible wallets one by one or in batches.
- Privileged operators can freeze and unfreeze wallets, including in batches, when restrictions need to be enforced.
- Privileged operators can freeze a specific token amount for an account, limiting how much that account can send through standard transfers.
- Privileged operators can force transfers from whitelisted wallets even if the sender is account-frozen, provided the receiver is also whitelisted and not account-frozen.
- Privileged issuers can mint and burn supply through normal managed issuance flows, both individually and in batches.
- Privileged operators can force creation or destruction of tokens for whitelisted wallets even if the wallet is account-frozen.
- Privileged managers can pause normal transfers and later restore them.
- The token exposes custom decimals so balances can be aligned with the asset’s preferred unit structure.

### Considerations

- This is not a permissionless token, because wallet eligibility is part of the design.
- Accounts can be frozen, token amounts can be frozen, transfers can be paused, and operators can intervene directly in balances and movement.
- The model is powerful for compliance-heavy assets, but buyers should expect strong issuer and operator control.
