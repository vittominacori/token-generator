## LiquidERC20

### Overview

LiquidERC20 is a launch-oriented token built for projects that want to create an initial Uniswap V2 market directly from the token contract. Instead of minting supply straight to the owner, it prepares the token for a liquidity event in which part of the supply is paired with ETH. For buyers, this makes the launch process itself a core part of the token design.

### When to use it

This model is useful when the project plans to start trading through a Uniswap V2 pool and wants liquidity creation to be part of the deployment flow. It is particularly relevant for market-first launches, community launches, and tokens whose early adoption depends on immediate on-chain tradability.

### How it works

At deployment, the token creates its Uniswap V2 pair against WETH and mints the entire initial supply to the contract itself. The deployer then performs a one-time liquidity initialization by sending ETH and choosing how many tokens should be placed into the pool. The remaining tokens are transferred to the owner after liquidity is created. The initialization can optionally leave the LP position locked in the contract or send the LP tokens to the owner, depending on launch preferences.

### Key features

- Users can interact with a token that is designed to enter the market through a Uniswap V2 liquidity pool rather than through a simple wallet distribution.
- The contract exposes the address of the token/ETH pair, making it easier for interfaces and users to identify the launch market.
- The deployer can perform a one-time liquidity setup that determines how much supply enters the initial pool.
- The launch can be configured so that LP tokens remain locked in the contract or are transferred to the owner.

### Considerations

- Trading setup is not complete until the one-time liquidity initialization is executed.
- Part of the buyer trust model depends on how liquidity is configured and who ultimately controls the LP tokens.
- This model is strong for launch mechanics, but less relevant if the token will not rely on an on-chain market from the start.
