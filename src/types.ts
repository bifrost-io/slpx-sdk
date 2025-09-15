import { Address } from "viem";

export type ContractAddressInfo = {
  astarMainnet: NetworkContractInfo;
  astarTestnet: NetworkContractInfo;
  mantaPacific: NetworkContractInfo;
  mantaPacificSepolia: NetworkContractInfo;
  soneiumMainnet: NetworkContractInfo;
  moonbeamMainnet: NetworkContractInfo;
  moonriverTestnet: NetworkContractInfo;
  moonbaseTestnet: NetworkContractInfo;
  arbitrum: NetworkContractInfo;
  arbitrumSepolia: NetworkContractInfo;
  base: NetworkContractInfo;
  baseSepolia: NetworkContractInfo;
  ethereum: NetworkContractInfo;
  ethereumSepolia: NetworkContractInfo;
  bsc: NetworkContractInfo;
  bscTestnet: NetworkContractInfo;
  passetHub: NetworkContractInfo;
  unichainSepolia: NetworkContractInfo;
};

export type NetworkContractInfo = {
  slpx?: SlpxContractInfo;
  vBNC?: TokenContractInfo;
  vETH?: TokenContractInfo;
  DOT?: TokenContractInfo;
  BNC?: TokenContractInfo;
  vDOT?: TokenContractInfo;
  vManta?: TokenContractInfo;
  manta?: TokenContractInfo;
  xcDot?: TokenContractInfo;
  xcvDOT?: TokenContractInfo;
  xcASTR?: TokenContractInfo;
  xcvASTR?: TokenContractInfo;
  GLMR?: TokenContractInfo;
  xcGLMR?: TokenContractInfo;
  xcvGLMR?: TokenContractInfo;
};

export type SlpxContractInfo = {
  address: Address;
}

export type TokenContractInfo = {
  address: Address;
  name: string;
  symbol: string;
  decimals: number;
}

export type PublicRpcUrls = {
  mantaPacific: string;
  moonbeamMainnet: string;
}

export type AssetName = "vETH" | "vDOT" | "DOT" | "vManta" | "manta" | "xcDot" | "xcvDOT" | "xcASTR" | "xcvASTR" | "GLMR" | "xcGLMR" | "xcvGLMR";

export type TestnetChainName = "moonbaseTestnet" | "arbitrumSepolia" | "base" | "baseSepolia" | "ethereum" | "ethereumSepolia" | "bsc" | "bscTestnet" | "passetHub" | "unichainSepolia";

export type TestnetChainId = 169 | 3441006 | 1284 | 1285 | 1287 | 42161 | 421614 | 8453 | 84532 | 1 | 11155111 | 56 | 97 | 420420422 | 1301;

export type ValidTestnetChainInput = TestnetChainName | TestnetChainId;