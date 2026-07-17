import * as fs from "fs";
import * as path from "path";
import {
  evmNetworks,
  evmTokenTypes,
  siteUrl,
  solanaNetworks,
  solanaTokenTypes,
} from "./data";

const appUrl = "https://www.smartcontracts.tools/token-generator/";
const docsUrl = "https://www.smartcontracts.tools/token-generator/docs/";
const tutorialsUrl =
  "https://www.smartcontracts.tools/token-generator/tutorials/";

const markdownLinks = (
  items: { text: string; link: string }[],
  prefix = "",
): string =>
  items.map(({ text, link }) => `- [${prefix}${text}](${link})`).join("\n");

const markdownGroup = (
  title: string,
  items: { text: string; link: string }[],
  prefix = "",
): string => `### ${title}\n\n${markdownLinks(items, prefix)}`;

const evmTokenTypeLinks = evmTokenTypes.map(({ text, slug }) => ({
  text,
  link: `${siteUrl}${slug}/`,
}));

const solanaTokenTypeLinks = solanaTokenTypes.map(({ text, slug }) => ({
  text,
  link: `${siteUrl}${slug}/`,
}));

const readme = `# Token Generator

Create a Token in less than a minute with the most trusted No-code Token Generator for ERC20, BEP20, SPL Token and Token 2022.

Token Generator is a distributed application for creating fungible assets on EVM networks and Solana. It deploys specialized ERC20 or BEP20 smart contracts on EVM networks and creates Solana mints through the SPL Token Program or Token 2022.

Since 2018, Token Generator has been the go-to platform for over 55.000 projects and companies, eliminating the need for coding expertise and streamlining the tokenization process.

Through seamless token creation, entrepreneurs and enterprises have collectively infused over $320 million into circulating supply worldwide, fueling growth and innovation.

For ERC20 tokens, define the name, symbol, supply and decimals, then choose from features such as Mintable, Burnable, Reflection, Deflationary, Liquidity, Access Type, ERC1363, ERC3009 and ERC2612. For Solana, choose SPL Token or Token 2022, configure identity, supply and metadata, and review permanent mint, freeze and metadata authority options.

## Official Links

- [Token Generator](https://erc20tokengenerator.com/)
- [Open App](${appUrl})
- [Tutorials](${tutorialsUrl})
- [Documentation](${docsUrl})

## Token Generator Networks

${markdownGroup(
  "EVM Networks",
  evmNetworks.map(({ name, link }) => ({ text: name, link })),
)}

${markdownGroup(
  "Solana",
  solanaNetworks.map(({ name, link }) => ({ text: name, link })),
)}

## Create Token

${markdownGroup(
  "EVM Networks",
  evmNetworks.map(({ createText, createLink }) => ({
    text: createText,
    link: createLink,
  })),
)}

${markdownGroup(
  "Solana",
  solanaTokenTypes.map(({ createText, createLink }) => ({
    text: createText,
    link: createLink,
  })),
)}

## Tutorials

${markdownGroup(
  "EVM Networks",
  evmNetworks.map(({ tutorialText, tutorialLink }) => ({
    text: tutorialText,
    link: tutorialLink,
  })),
)}

${markdownGroup(
  "Solana",
  solanaNetworks.map(({ tutorialText, tutorialLink }) => ({
    text: tutorialText,
    link: tutorialLink,
  })),
)}

## Available Token Types

${markdownGroup("EVM Networks", evmTokenTypeLinks)}

${markdownGroup("Solana", solanaTokenTypeLinks)}

## Create Token Types

${markdownGroup(
  "EVM Networks",
  evmTokenTypes.map(({ text, createLink }) => ({ text, link: createLink })),
  "Create ",
)}

${markdownGroup(
  "Solana",
  solanaTokenTypes.map(({ createText, createLink }) => ({
    text: createText,
    link: createLink,
  })),
)}

## Token Type Documentation

${markdownGroup(
  "EVM Networks",
  evmTokenTypes.map(({ text, docsLink }) => ({ text, link: docsLink })),
  "More info about ",
)}

${markdownGroup(
  "Solana",
  solanaTokenTypes.map(({ text, docsLink }) => ({ text, link: docsLink })),
  "More info about ",
)}
`;

fs.writeFileSync(path.resolve(process.cwd(), "README.md"), readme);
