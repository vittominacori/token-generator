## RWAERC20

### Overview

RWAERC20 is a permissioned token model built for regulated, managed, or otherwise restricted asset environments, including real-world asset tokenization. Its core logic is centered on authorization, freezing, controlled issuance, controlled destruction, and operator intervention. For buyers, this is a token designed for compliance and operational control rather than open, permissionless circulation.

### When to use it

This model is appropriate when the issuer needs to decide which wallets may hold the token, freeze accounts when necessary, batch-manage many addresses, or intervene in token movement for administrative or legal reasons. It is a natural fit for security-style products, regulated investment assets, restricted memberships, and tokenized real-world assets with eligibility requirements.

### How it works

The token is deployed with a custom name, symbol, decimals value, and initial supply. The initial owner is authorized from the start, and only authorized accounts can normally hold and transfer the token. Privileged verifiers can authorize or remove wallets, including in batch. Privileged agents can freeze or unfreeze accounts, move tokens between authorized wallets, and perform forced minting or forced burning for authorized addresses. Privileged issuers can mint and burn through normal controlled flows, and managers can pause or unpause standard user transfers and permanently stop future minting. Taken together, these functions create a token that behaves more like a managed register of ownership than a completely open-market asset.

### Key features

- Only authorized wallets are allowed to hold and transfer the token under normal conditions.
- Authorized operators can approve or remove eligible wallets one by one or in batches.
- Privileged operators can freeze and unfreeze wallets, including in batches, when restrictions need to be enforced.
- Privileged operators can move tokens between eligible wallets even in situations where a standard user transfer would not be appropriate.
- Privileged issuers can mint and burn supply through normal managed issuance flows, both individually and in batches.
- Privileged operators can force creation or destruction of tokens for authorized wallets when administrative intervention is required.
- Privileged managers can pause normal transfers and later restore them.
- The token exposes custom decimals so balances can be aligned with the asset’s preferred unit structure.

### Considerations

- This is not a permissionless token, because wallet eligibility is part of the design.
- Accounts can be frozen, transfers can be paused, and operators can intervene directly in balances and movement.
- The model is powerful for compliance-heavy assets, but buyers should expect strong issuer and operator control.
