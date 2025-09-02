import { Address } from "viem";

export type ContractAddressInfo = {
  astarMainnet: NetworkContractInfo;
  astarTestnet: NetworkContractInfo;
  mantaPacific: NetworkContractInfo;
  soneiumMainnet: NetworkContractInfo;
  moonbeamMainnet: NetworkContractInfo;
  moonriverTestnet: NetworkContractInfo;
  moonbaseTestnet: NetworkContractInfo;
  arbitrum: NetworkContractInfo;
  base: NetworkContractInfo;
  ethereum: NetworkContractInfo;
  bsc: NetworkContractInfo;
};

export type NetworkContractInfo = {
  slpx?: SlpxContractInfo;
  vBNC?: TokenContractInfo;
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