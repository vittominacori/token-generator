import * as fs from "fs";
import * as path from "path";

const specsDir = "routes/specs/";
const siteUrl = "https://vittominacori.github.io/token-generator/";
const appUrl = "https://www.smartcontracts.tools/token-generator/";

export type TokenType = {
  text: string;
  slug: string;
  link: string;
  file: string;
  createText: string;
  createLink: string;
  docsLink: string;
};

export type EVMNetwork = {
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

export type SolanaNetwork = {
  key: "solana";
  icon: "solana";
  name: "Solana";
  tokenStandard: "SPL Token / Token 2022";
  link: string;
  tutorialText: string;
  tutorialLink: string;
};

type EVMNetworkSource = {
  key: string;
  icon: string;
  name: string;
  tokenStandard?: string;
};

const solanaTokenTypeSources = [
  { text: "SPL Token", slug: "SPLToken" },
  { text: "Token 2022", slug: "Token2022" },
] as const;

const solanaTokenFiles = new Set<string>(
  solanaTokenTypeSources.map(({ slug }) => `${slug}.md`),
);

export const evmTokenTypes: TokenType[] = fs
  .readdirSync(path.resolve(process.cwd(), specsDir))
  .filter((file) => file.endsWith(".md") && !solanaTokenFiles.has(file))
  .map((file) => {
    const slug = path.basename(file, ".md");

    return {
      text: slug,
      slug,
      link: `/${slug}/`,
      file,
      createText: `Create ${slug}`,
      createLink: `${appUrl}create/ethereum/${encodeURIComponent(slug)}`,
      docsLink: `${appUrl}docs/?tokenType=${encodeURIComponent(slug)}`,
    };
  })
  .sort((a, b) => a.text.localeCompare(b.text));

export const solanaTokenTypes: TokenType[] = solanaTokenTypeSources.map(
  ({ text, slug }) => ({
    text,
    slug,
    link: `/${slug}/`,
    file: `${slug}.md`,
    createText: `Create ${text} on Solana`,
    createLink: `${appUrl}create/solana/${slug}/`,
    docsLink: `${appUrl}docs/?network=solana&tokenType=${slug}`,
  }),
);

export const publicEvmTokenTypes = evmTokenTypes.map(({ text, link }) => ({
  text,
  link,
}));

export const publicSolanaTokenTypes = solanaTokenTypes.map(
  ({ text, link, createText, createLink }) => ({
    text,
    link,
    createText,
    createLink,
  }),
);

const evmNetworkSources: EVMNetworkSource[] = [
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

export const evmNetworks: EVMNetwork[] = evmNetworkSources.map(
  ({ key, icon, name, tokenStandard = "ERC20" }) => ({
    key,
    icon,
    name,
    tokenStandard,
    link: `${appUrl}${key}/`,
    tutorialText: `How to create ${tokenStandard} Token on ${name}`,
    tutorialLink: `${appUrl}tutorials/how-to-create-${tokenStandard.toLowerCase()}-token-on-${key}/`,
    createText: `Create ${tokenStandard} on ${name}`,
    createLink: `${appUrl}create/${key}/`,
  }),
);

export const solanaNetworks: SolanaNetwork[] = [
  {
    key: "solana",
    icon: "solana",
    name: "Solana",
    tokenStandard: "SPL Token / Token 2022",
    link: `${appUrl}solana/`,
    tutorialText: "How to create an SPL Token or Token 2022 on Solana",
    tutorialLink: `${appUrl}tutorials/how-to-create-spl-token2022-token-on-solana/`,
  },
];

export const allTokenTypes = [...evmTokenTypes, ...solanaTokenTypes];

export { appUrl, siteUrl, specsDir };
