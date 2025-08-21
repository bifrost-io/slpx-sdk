export type ContractAddressInfo = {
  astarMainnet: NetworkContractInfo;
  astarTestnet: NetworkContractInfo;
  mantaPacific: NetworkContractInfo;
  soneiumMainnet: NetworkContractInfo;
  moonbeamMainnet: NetworkContractInfo;
  moonriverTestnet: NetworkContractInfo;
  moonbaseTestnet: NetworkContractInfo;
};

export type NetworkContractInfo = {
  address?: string;
  slpx?: ContractAddressInfo;
  vManta?: ContractAddressInfo;
  manta?: ContractAddressInfo;
};