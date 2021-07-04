---
permalink: docs/how-to-create-erc20-token
title: How to create ERC20 Token
description:  Create your own ERC20 Token. Easily deploy Smart Contract for a Standard, Capped, Mintable, Burnable, Payable ERC20 Token.
meta:
    - property: og:url 
      content: https://vittominacori.github.io/docs/how-to-create-erc20-token/
    - property: og:title
      content: How to create ERC20 Token | Token Generator
    - property: og:description
      content: Create your own ERC20 Token. Easily deploy Smart Contract for a Standard, Capped, Mintable, Burnable, Payable ERC20 Token.
    - property: twitter:title
      content: How to create ERC20 Token | Token Generator
    - property: twitter:description
      content: Create your own ERC20 Token. Easily deploy Smart Contract for a Standard, Capped, Mintable, Burnable, Payable ERC20 Token.
---

# How to create ERC20 Token
ERC20 Token Generator is a distributed application that runs on the Ethereum network, using specially-developed Smart Contracts to enable users to build their ERC20 Tokens.

Easily deploy Smart Contract for a Standard, Capped, Mintable, Burnable, Payable ERC20 Token.

Create an ERC20 Token in less than a minute.

**No login. No setup. No coding required.**

[[toc]]

## Create Token

Visit [ERC20 Token Generator](https://vittominacori.github.io/erc20-generator/)

### Choose your token type

Choose between different token types and features

![Token Types](/images/docs/create/erc20/token-types.png)

### Enter your details

Enter your preferred Token name and symbol. Choose your supply and Token type.

![Token Details](/images/docs/create/erc20/token-details.png)

### Confirm your transaction

Confirm your transaction using MetaMask.

![Token Confirm](/images/docs/create/erc20/token-confirm.png)

### Waiting for confirmation

Waiting for your transaction to be confirmed,

![Token Waiting](/images/docs/create/erc20/token-waiting.png)

### View your token

Your token is ready to use, view on Etherscan, add to MetaMask or create a widget.

![Token Confirmed](/images/docs/create/erc20/token-confirmed.png)

### Verified source code

Your source code will be automatically verified on Etherscan.

![Token Source Code](/images/docs/create/erc20/token-source-code.png)

## Features
### Detailed
Your Token will be fully compliant with the ERC20 definition and compatible with any ERC20 wallet all around the world. It will have a name, a symbol and a decimals amount.

### Burnable
Your Token can be burnt. It means that you can choose to reduce the circulating supply by destroying some of your tokens.

### Mintable
You will be able to generate tokens by minting them. Only token owner will be able to mint. You can also disable minting if you don’t want to generate tokens anymore.

### Supply Type
#### 10k
Your token supply will be 10.000. The entire token supply will be generated during deploy and sent to Token Owner wallet. You can't increase or reduce supply later.

#### Fixed Supply
The entire token supply will be generated during deploy and sent to Token Owner wallet. You can't increase or reduce supply later.

#### Capped Supply
You can define an initial supply to sent to Token Owner's wallet. You can increase or reduce supply later by minting or burning tokens (if allowed). You won't be able to generate more tokens than the defined supply cap.

#### Unlimited Supply
You can define an initial supply to sent to Token Owner's wallet. You can increase or reduce supply later by minting or burning tokens (if allowed). You will be able to generate unlimited tokens without an upper limit.

### Transfer Type
#### Unstoppable
Everyone can always transfer his own tokens. Transfer can't be stopped.

#### Pausable
Token owner can stop token transfers. Useful for scenarios such as preventing trades until the end of an evaluation period, or having an emergency switch for freezing all token transfers in the event of a large bug.

### Access Type
#### None
Your Token doesn't need an access type because of there are not actions that needs privileges.

#### Ownable
Your Token will have an Owner. The account you use to deploy your Token will be owner by default and will be able to mint new tokens or call the finish minting function. You can transfer token ownership to addresses or Smart Contract.

#### Role Based
Your Token will have Roles. Accounts with "MINTER" role will be able to mint new tokens. Accounts with "ADMIN" role will be able to add or remove roles to minters or other admins. The account you use to deploy your Token will be ADMIN and MINTER by default. In addition your Token will have the Ownable behaviour too.

### ERC1363
The ERC1363 is an ERC20 compatible Token that can make a callback on the receiver contract to notify token transfers or token approvals.

### Token Recover
There are lots of tokens lost forever into Smart Contracts. It allows the contract owner to recover any ERC20 token sent into the contract for error.

## View App

Visit [ERC20 Token Generator](https://vittominacori.github.io/erc20-generator/)

## Disclaimer

::: warning DISCLAIMER
ERC20 Token Generator and its author are free of any liability regarding Tokens built using this App, and the use that is made of them.
Tokens built on ERC20 Token Generator, their projects, their teams, their use of Token (as well as anything related to Token) are in no way connected to ERC20 Token Generator or its author.

ERC20 Token Generator's code is provided under MIT License. Anyone can use it as per their needs.
The App's purpose is to make people able to tokenize their ideas without coding or paying large amounts for it.
Source code is public and well tested and continuously updated to reduce risk of bugs and introduce language optimizations.
Anyway the purchase of tokens involves a high degree of risk.
Before acquiring tokens, it is recommended to carefully weighs all the information and risks detailed in Token owner's Conditions.
:::

## Contacts
If you have a technical or support question, a privacy concern, complaint, or any type of question, please open an issue [here](https://github.com/vittominacori/token-generator/issues) or send a PM to [@Erc20Generator](https://twitter.com/Erc20Generator).
