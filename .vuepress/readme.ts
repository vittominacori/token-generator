import * as fs from "fs";
import * as path from "path";
import { networks, siteUrl, tokenTypes } from "./data";

const appUrl = "https://www.smartcontracts.tools/token-generator/";
const docsUrl = "https://www.smartcontracts.tools/token-generator/docs/";
const tutorialsUrl =
  "https://www.smartcontracts.tools/token-generator/tutorials/";

const markdownLinks = (
  items: { text: string; link: string }[],
  prefix = "",
): string =>
  items.map(({ text, link }) => `- [${prefix}${text}](${link})`).join("\n");

const tokenTypeLinks = tokenTypes.map(({ text }) => ({
  text,
  link: `${siteUrl}${text}/`,
}));

const tokenCreateLinks = tokenTypes.map(({ text }) => ({
  text,
  link: `${appUrl}create/ethereum/${encodeURIComponent(text)}`,
}));

const tokenDocsLinks = tokenTypes.map(({ text }) => ({
  text,
  link: `${docsUrl}?tokenType=${encodeURIComponent(text)}`,
}));

const readme = `# Token Generator

Create a Token in less than a minute with the most trusted Smart Contract Generator for ERC20 and BEP20.

Token Generator is a distributed application that runs on the Blockchain, using specially-developed Smart Contracts to enable users to build their ERC20 or BEP20 Tokens.

Since 2018, Token Generator has been the go-to platform for over 50.000 projects and companies, eliminating the need for coding expertise and streamlining the tokenization process.

Through seamless token creation, entrepreneurs and enterprises have collectively infused over $320 million into circulating supply worldwide, fueling growth and innovation.

With Token Generator, you have the flexibility to tailor your token to meet specific requirements and objectives. The user-friendly interface provides a seamless experience, allowing even those without extensive technical knowledge to create tokens efficiently. You can effortlessly define the token's name, symbol, total supply, and decimal places, as well as select different features such as Mintable, Burnable, Reflection, Deflationary, Liquidity, Access Type, ERC1363, ERC3009, ERC2612 and more, giving your token its unique identity.

## Official Links

- [Token Generator](https://erc20tokengenerator.com/)
- [Open App](${appUrl})
- [Tutorials](${tutorialsUrl})
- [Documentation](${docsUrl})

## Token Generator Networks

${markdownLinks(networks.map(({ name, link }) => ({ text: name, link })))}

## Create Token

${markdownLinks(networks.map(({ createText, createLink }) => ({ text: createText, link: createLink })))}

## Tutorials

${markdownLinks(networks.map(({ tutorialText, tutorialLink }) => ({ text: tutorialText, link: tutorialLink })))}

## Available Token Types

${markdownLinks(tokenTypeLinks)}

## Create Token Types

${markdownLinks(tokenCreateLinks, "Create ")}

## Token Type Documentation

${markdownLinks(tokenDocsLinks, "More info about ")}
`;

fs.writeFileSync(path.resolve(process.cwd(), "README.md"), readme);
