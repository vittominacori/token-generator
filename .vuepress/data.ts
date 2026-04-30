import * as fs from "fs";
import * as path from "path";

const specsDir = "routes/specs/";
const siteUrl = "https://vittominacori.github.io/token-generator/";

export type TokenType = {
  text: string;
  link: string;
  file: string;
};

export type Network = {
  key: string;
  icon: string;
  name: string;
  tokenStandard: string;
  link: string;
  tutorialText: string;
  tutorialLink: string;
  createText: string;
  createLink: string;
};

type NetworkSource = {
  key: string;
  icon: string;
  name: string;
  tokenStandard?: string;
};

export const tokenTypes: TokenType[] = fs
  .readdirSync(path.resolve(process.cwd(), specsDir))
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const text = path.basename(file, ".md");

    return { text, link: `/${text}/`, file };
  })
  .sort((a, b) => a.text.localeCompare(b.text));

export const publicTokenTypes = tokenTypes.map(({ text, link }) => ({
  text,
  link,
}));

const networkSources: NetworkSource[] = [
  {
    key: "ethereum",
    icon: "eth",
    name: "Ethereum",
  },
  {
    key: "bsc",
    icon: "bnb",
    name: "BNB Smart Chain (BSC)",
    tokenStandard: "BEP20",
  },
  {
    key: "polygon",
    icon: "pol",
    name: "Polygon PoS",
  },
  {
    key: "base",
    icon: "base",
    name: "Base",
  },
  {
    key: "avalanche",
    icon: "avax",
    name: "Avalanche C-Chain",
  },
  {
    key: "arbitrum",
    icon: "arbitrum",
    name: "Arbitrum One",
  },
  {
    key: "optimism",
    icon: "optimism",
    name: "Optimism OP Mainnet",
  },
  {
    key: "linea",
    icon: "linea",
    name: "Linea",
  },
  {
    key: "monad",
    icon: "monad",
    name: "Monad",
  },
  {
    key: "sonic",
    icon: "sonic",
    name: "Sonic",
  },
  {
    key: "plasma",
    icon: "plasma",
    name: "Plasma",
  },
  {
    key: "zksync",
    icon: "zksync",
    name: "ZKsync Era",
  },
  {
    key: "unichain",
    icon: "unichain",
    name: "Unichain",
  },
  {
    key: "worldchain",
    icon: "worldchain",
    name: "World Chain",
  },
  {
    key: "arc",
    icon: "arc",
    name: "Arc",
  },
];

export const networks: Network[] = networkSources.map(
  ({ key, icon, name, tokenStandard = "ERC20" }) => ({
    key,
    icon,
    name,
    tokenStandard,
    link: `https://www.smartcontracts.tools/token-generator/${key}/`,
    tutorialText: `How to create ${tokenStandard} Token on ${name}`,
    tutorialLink: `https://www.smartcontracts.tools/token-generator/tutorials/how-to-create-${tokenStandard.toLowerCase()}-token-on-${key}/`,
    createText: `Create ${tokenStandard} on ${name}`,
    createLink: `https://www.smartcontracts.tools/token-generator/create/${key}/`,
  }),
);

export { siteUrl, specsDir };
