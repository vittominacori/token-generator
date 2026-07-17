---
permalink: tutorials
title: Tutorials
description: Discover how to create ERC20, BEP20, SPL Token or Token 2022 assets in less than a minute. No login. No setup. No coding required.
meta:
  - property: og:url
    content: https://vittominacori.github.io/token-generator/tutorials/
  - property: og:title
    content: Tutorials | Token Generator
  - property: og:description
    content: Discover how to create ERC20, BEP20, SPL Token or Token 2022 assets in less than a minute. No login. No setup. No coding required.
  - property: twitter:title
    content: Tutorials | Token Generator
  - property: twitter:description
    content: Discover how to create ERC20, BEP20, SPL Token or Token 2022 assets in less than a minute. No login. No setup. No coding required.
---

# Tutorials

Token Generator is a distributed application for creating ERC20 and BEP20 smart contracts on EVM networks, as well as SPL Token and Token 2022 mints on Solana.

Discover how to create an EVM or Solana token in less than a minute.

**No login. No setup. No coding required. No credit card required.**

<ul>
  <li class="token-list-heading"><strong>EVM Networks</strong></li>
  <li v-for="network in $site.themeConfig.evmNetworks" :key="network.tutorialLink">
    <img :src="$withBase(`/assets/crypto-icons/color/${network.icon}.svg`)" :alt="network.name" width="16" height="16">
    <a :href="network.tutorialLink" target="_blank" rel="noopener noreferrer">{{ network.tutorialText }}</a>
  </li>
  <li class="token-list-heading"><strong>Solana</strong></li>
  <li v-for="network in $site.themeConfig.solanaNetworks" :key="network.tutorialLink">
    <img :src="$withBase(`/assets/crypto-icons/color/${network.icon}.svg`)" :alt="network.name" width="16" height="16">
    <a :href="network.tutorialLink" target="_blank" rel="noopener noreferrer">{{ network.tutorialText }}</a>
  </li>
</ul>

Discover more [here](https://www.smartcontracts.tools/token-generator/tutorials/).

## Create Token

<ul>
  <li class="token-list-heading"><strong>EVM Networks</strong></li>
  <li v-for="network in $site.themeConfig.evmNetworks" :key="network.createLink">
    <img :src="$withBase(`/assets/crypto-icons/color/${network.icon}.svg`)" :alt="network.name" width="16" height="16">
    <a :href="network.createLink" target="_blank" rel="noopener noreferrer">{{ network.createText }}</a>
  </li>
  <li class="token-list-heading"><strong>Solana</strong></li>
  <li v-for="tokenType in $site.themeConfig.solanaTokenTypes" :key="tokenType.createLink">
    <img :src="$withBase('/assets/crypto-icons/color/solana.svg')" alt="Solana" width="16" height="16">
    <a :href="tokenType.createLink" target="_blank" rel="noopener noreferrer">{{ tokenType.createText }}</a>
  </li>
</ul>

::: warning IMPORTANT
Token Generator is now available only on [SmartContracts Tools](https://www.smartcontracts.tools/token-generator/).
:::
