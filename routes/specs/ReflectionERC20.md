## ReflectionERC20

### Overview

ReflectionERC20 is designed to reward holders automatically through transfer activity. Instead of requiring users to stake or claim rewards manually, the token redistributes part of eligible transfer volume across participating holders through a built-in reflection mechanism. For buyers, this means the token’s economic behavior is tied directly to how often it is used.

### When to use it

This model is useful for community-driven tokens, yield-style holding narratives, and ecosystems that want passive holder rewards without an additional staking product. It works best when the project wants transfer activity itself to be part of the value proposition for long-term holders.

### How it works

The contract is deployed with an initial supply and a reflection fee percentage. When eligible transfers occur, part of the transfer value is routed into the reflection mechanism and distributed across participating holders. The owner can change the reflection rate and can also decide which addresses are included in reflections and which addresses are required to pay the reflection fee. This is important because treasury wallets, exchange wallets, bridges, and technical accounts are often treated differently from ordinary holders.

### Key features

- Users can hold the token and benefit from an automatic reward mechanism tied to transfer activity.
- The owner can raise, lower, or disable the reflection fee over time.
- The owner can decide whether a specific wallet participates in reflection rewards.
- The owner can decide whether a specific wallet is charged the reflection fee on transfers.
- The token’s design avoids requiring a separate staking contract for basic passive-reward behavior.

### Considerations

- Holder outcomes depend on ongoing transaction activity and the active fee configuration.
- Some wallets may be excluded from rewards or from paying the fee, which affects how value flows through the ecosystem.
- Buyers should understand that the owner can materially change reflection behavior after launch.
