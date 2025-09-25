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
  vbnc?: TokenContractInfo;
  eth?: TokenContractInfo;
  veth?: TokenContractInfo;
  dot?: TokenContractInfo;
  bnc?: TokenContractInfo;
  vdot?: TokenContractInfo;
  vmanta?: TokenContractInfo;
  manta?: TokenContractInfo;
  xcdot?: TokenContractInfo;
  xcvdot?: TokenContractInfo;
  xcastr?: TokenContractInfo;
  xcvastr?: TokenContractInfo;
  glmr?: TokenContractInfo;
  xcglmr?: TokenContractInfo;
  xcvglmr?: TokenContractInfo;
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

export type MintingAssetName = "eth" | "dot" | "xcdot" | "glmr";

export type VTokenAssetName = "veth" | "vdot" | "vbnc" | "xcvdot" | "xcvglmr";

export type TestnetChainName = "moonbaseTestnet" | "arbitrumSepolia" | "baseSepolia" | "ethereumSepolia" | "bscTestnet" | "passetHub" | "unichainSepolia";

export type TestnetChainId = 1287 | 421614 | 84532 | 11155111 | 97 | 420420422 | 1301;

export type MainnetChainName = "moonbeamMainnet" | "arbitrum" | "base" | "ethereum" | "bsc";

export type MainnetChainId = 1284 | 42161 | 8453 | 1 | 56;

export type ValidTestnetChainInput = TestnetChainName | TestnetChainId;

export type ValidMainnetChainInput = MainnetChainName | MainnetChainId;

// Contract parameter types for EIP-7702 and non-EIP-7702
export type TestnetMintParamsWithEip7702 = {
  to: Address;
  abi: any;
  functionName: string;
  value: bigint | undefined;
  args: any[];
};

export type TestnetMintParamsWithoutEip7702 = {
  address: Address;
  abi: any;
  functionName: string;
  value: bigint | undefined;
  args: any[];
};

export type TestnetMintParams = TestnetMintParamsWithEip7702 | TestnetMintParamsWithoutEip7702;