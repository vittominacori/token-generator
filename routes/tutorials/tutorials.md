---
permalink: tutorials
title: Tutorials
description: Discover how to Create ERC20 or BEP20 Token in less than a minute. No login. No setup. No coding required.
meta:
  - property: og:url
    content: https://vittominacori.github.io/token-generator/tutorials/
  - property: og:title
    content: Tutorials | Token Generator
  - property: og:description
    content: Discover how to Create ERC20 or BEP20 Token in less than a minute. No login. No setup. No coding required.
  - property: twitter:title
    content: Tutorials | Token Generator
  - property: twitter:description
    content: Discover how to Create ERC20 or BEP20 Token in less than a minute. No login. No setup. No coding required.
---

# Tutorials

Token Generator is a distributed application that runs on the Blockchain, using specially-developed Smart Contracts to enable users to build their ERC20 or BEP20 Tokens.

Discover how to Create ERC20 or BEP20 Token in less than a minute.

**No login. No setup. No coding required. No credit card required.**

<ul>
  <li v-for="network in $site.themeConfig.networks" :key="network.tutorialLink">
    <img :src="$withBase(`/assets/crypto-icons/color/${network.icon}.svg`)" :alt="network.name" width="16" height="16">
    <a :href="network.tutorialLink" target="_blank" rel="noopener noreferrer">{{ network.tutorialText }}</a>
  </li>
</ul>

Discover more [here](https://www.smartcontracts.tools/token-generator/tutorials/).

## Create Token

<ul>
  <li v-for="network in $site.themeConfig.networks" :key="network.createLink">
    <img :src="$withBase(`/assets/crypto-icons/color/${network.icon}.svg`)" :alt="network.name" width="16" height="16">
    <a :href="network.createLink" target="_blank" rel="noopener noreferrer">{{ network.createText }}</a>
  </li>
</ul>

::: warning IMPORTANT
Token Generator is now available only on [SmartContracts Tools](https://www.smartcontracts.tools/token-generator/).
:::
