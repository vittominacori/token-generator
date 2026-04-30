## SwappableERC20

### Overview

SwappableERC20 is a launch-focused token that combines two ideas in one contract: immediate market setup through Uniswap V2 and wallet concentration control through anti-whale limits. For buyers, this means the token is built not just to exist, but to launch into trading with distribution rules already in place.

### When to use it

This model is useful for projects that want to start with an on-chain market while also discouraging oversized wallet positions. It is a good fit for trading-first launches, community launches, meme tokens with distribution goals, and ecosystems where early concentration risk is a concern.

### How it works

The contract creates its Uniswap V2 pair against WETH during deployment and mints the initial supply to the contract itself. The deployer then performs a one-time liquidity setup by contributing ETH and selecting how many tokens will enter the initial pool. Any remaining tokens are transferred to the owner. At the same time, the token enforces a maximum wallet-balance percentage for receiving addresses, unless those addresses have been excluded from the rule. This creates a token that is oriented both toward tradability and toward broader wallet distribution.

### Key features

- Users can access a token designed to launch through a token/ETH market on Uniswap V2.
- The contract exposes the pair address, which helps identify the intended trading pool.
- The deployer can perform a one-time initial liquidity setup and decide whether LP tokens remain locked or go to the owner.
- Large wallet accumulation can be limited automatically through a percentage-based wallet cap.
- The owner can change the wallet cap after launch.
- The owner can exempt selected wallets from the anti-whale rule, such as liquidity or operational accounts.

### Considerations

- The trading setup depends on the one-time liquidity initialization being executed.
- Buyer trust depends in part on how LP tokens are handled after launch.
- Large purchases may be blocked if they would exceed the active wallet limit.
