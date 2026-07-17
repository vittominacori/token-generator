---
permalink: /
title: Token Generator | Create ERC20 and Solana Tokens
description: Create ERC20, BEP20, SPL Token and Token 2022 assets in less than a minute with the most trusted no-code Token Generator.
home: true
heroImage: /images/logo-token-generator.svg
heroText: Token Generator
tagline: Create ERC20, BEP20, SPL Token and Token 2022 assets in less than a minute without coding.
actionText: Get Started →
actionLink: /#what-is-token-generator
navbar: true
meta:
  - property: og:url
    content: https://vittominacori.github.io/token-generator/
  - property: og:title
    content: Token Generator | Create ERC20 and Solana Tokens
  - property: og:description
    content: Create ERC20, BEP20, SPL Token and Token 2022 assets in less than a minute with the most trusted no-code Token Generator.
  - property: twitter:title
    content: Token Generator | Create ERC20 and Solana Tokens
  - property: twitter:description
    content: Create ERC20, BEP20, SPL Token and Token 2022 assets in less than a minute with the most trusted no-code Token Generator.
features:
  - title: Configure your Token
    details: Choose an ERC20 token template or the SPL Token or Token 2022 program on Solana. Define identity, supply and decimals, then configure the features, metadata and authorities available for the selected ecosystem.
  - title: Deploy from your Wallet
    details: Select an EVM network or Solana and approve deployment directly from a compatible wallet. The resulting smart contract or Solana mint is controlled by your wallet and ready for supported exchanges, DEXs and applications.
  - title: Save Time and Money
    details: Token Generator provides a guided no-code workflow for EVM and Solana assets. Use battle-tested ERC20 smart contracts or established Solana token programs, with a FREE version available.
---

<img :src="$withBase('/images/token-generator.jpg')" alt="Token Generator" width="1200">

::: warning IMPORTANT
Token Generator is now available only on [SmartContracts Tools](https://www.smartcontracts.tools/token-generator/).
:::

## What is Token Generator?

Token Generator is a distributed application for creating fungible assets on EVM networks and Solana. It deploys specialized ERC20 or BEP20 smart contracts on EVM networks and creates Solana mints through the SPL Token Program or Token 2022.

Since 2018, Token Generator has been the go-to platform for over 55.000 projects and companies, eliminating the need for coding expertise and streamlining the tokenization process.

Through seamless token creation, entrepreneurs and enterprises have collectively infused over $320 million into circulating supply worldwide, fueling growth and innovation.

With Token Generator, you have the flexibility to tailor your token to meet specific requirements and objectives.
The user-friendly interface provides a seamless experience, allowing even those without extensive technical knowledge to create tokens efficiently.

For ERC20 tokens, you can define the token's name, symbol, total supply and decimal places, then select features such as Mintable, Burnable, Reflection, Deflationary, Liquidity, Access Type, ERC1363, ERC3009, ERC2612 and more.

For Solana tokens, you can choose SPL Token or Token 2022, configure identity, decimals and initial supply, publish optional metadata to IPFS and decide whether to revoke mint, freeze or metadata update authorities.

**Token Generator** is available on:

<ul>
  <li class="token-list-heading"><strong>EVM Networks</strong></li>
  <li v-for="network in $site.themeConfig.evmNetworks" :key="network.link">
    <img :src="$withBase(`/assets/crypto-icons/color/${network.icon}.svg`)" :alt="network.name" width="16" height="16">
    <a :href="network.link" target="_blank" rel="noopener noreferrer">{{ network.name }}</a>
  </li>
  <li class="token-list-heading"><strong>Solana</strong></li>
  <li v-for="network in $site.themeConfig.solanaNetworks" :key="network.link">
    <img :src="$withBase(`/assets/crypto-icons/color/${network.icon}.svg`)" :alt="network.name" width="16" height="16">
    <a :href="network.link" target="_blank" rel="noopener noreferrer">{{ network.name }}</a>
  </li>
</ul>

Try it FREE.

**No login. No setup. No coding required. No credit card required.**

## Official Websites

- [Token Generator](https://erc20tokengenerator.com/)
- [Open App](https://www.smartcontracts.tools/token-generator/)
- [Tutorials](https://www.smartcontracts.tools/token-generator/tutorials/).
- [Documentation](https://www.smartcontracts.tools/token-generator/docs/).

## Create Token

<ul>
  <li class="token-list-heading"><strong>EVM Networks</strong></li>
  <li v-for="network in $site.themeConfig.evmNetworks" :key="network.createLink">
    <img :src="$withBase(`/assets/crypto-icons/color/${network.icon}.svg`)" :alt="network.name" width="16" height="16">
    <a :href="network.createLink" target="_blank" rel="noopener noreferrer">{{ network.createText }}</a>
  </li>
  <li class="token-list-heading"><strong>Solana</strong></li>
  <li v-for="tokenType in $site.themeConfig.solanaTokenTypes" :key="tokenType.link">
    <img :src="$withBase('/assets/crypto-icons/color/solana.svg')" alt="Solana" width="16" height="16">
    <a :href="tokenType.createLink" target="_blank" rel="noopener noreferrer">{{ tokenType.createText }}</a>
  </li>
</ul>

<section class="available-token-types">
  <h2>Available Token Types</h2>
  <ul>
    <li class="token-list-heading"><strong>EVM Networks</strong></li>
    <li v-for="tokenType in $site.themeConfig.evmTokenTypes" :key="tokenType.link">
      <RouterLink :to="tokenType.link">{{ tokenType.text }}</RouterLink>
    </li>
    <li class="token-list-heading"><strong>Solana</strong></li>
    <li v-for="tokenType in $site.themeConfig.solanaTokenTypes" :key="tokenType.link">
      <RouterLink :to="tokenType.link">{{ tokenType.text }}</RouterLink>
    </li>
  </ul>
</section>

---

::: tip &copy; 2018 - 2026 | All rights reserved.
**[Token Generator](https://erc20tokengenerator.com/)** is a software registered by [Vittorio Minacori](https://vittorio.minacori.me)

Unauthorized reproduction, copying, distribution or any other use of the whole or any part of this software is strictly prohibited.
:::
