import { ContractAddressInfo } from "./types";
import { Address } from "viem";

export const CONTRACT_ADDRESS_INFO: ContractAddressInfo = {
  astarMainnet: {
    slpx: {
      address: "0x0000000000000000000000000000000000000000",
    },
  },
  astarTestnet: {
    slpx: {
      address: "0x0000000000000000000000000000000000000000",
    },
  },
  mantaPacific: {
    slpx: {
      address: "0x95A4D4b345c551A9182289F9dD7A018b7Fd0f940",
    },
    vmanta: {
      address: "0x7746ef546d562b443AE4B4145541a3b1a3D75717",
      name: "vManta",
      symbol: "vManta",
      decimals: 18,
    },
    manta: {
      address: "0x95CeF13441Be50d20cA4558CC0a27B601aC544E5",
      name: "Manta",
      symbol: "MANTA",
      decimals: 18,
    },
  },
  mantaPacificSepolia: {
    slpx: {
      address: "0x95A4D4b345c551A9182289F9dD7A018b7Fd0f940",
    },
    vmanta: {
      address: "0x7746ef546d562b443AE4B4145541a3b1a3D75717",
      name: "vManta",
      symbol: "vManta",
      decimals: 18,
    },
    manta: {
      address: "0x95CeF13441Be50d20cA4558CC0a27B601aC544E5",
      name: "Manta",
      symbol: "MANTA",
      decimals: 18,
    },
  },
  soneiumMainnet: {
    slpx: {
      address: "0x0000000000000000000000000000000000000000",
    },
  },
  moonbeamMainnet: {
    slpx: {
      address: "0xF1d4797E51a4640a76769A50b57abE7479ADd3d8",
    },
    xcdot: {
      address: "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",
      name: "xcDOT",
      symbol: "xcDOT",
      decimals: 10,
    },
    xcvdot: {
      address: "0xFFFfffFf15e1b7E3dF971DD813Bc394deB899aBf",
      name: "xcvDOT",
      symbol: "xcvDOT",
      decimals: 10,
    },
    xcastr: {
      address: "0xFfFFFfffA893AD19e540E172C10d78D4d479B5Cf",
      name: "xcASTR",
      symbol: "xcASTR",
      decimals: 18,
    },
    xcvastr: {
      address: "0xFffFffff55C732C47639231a4C4373245763d26E",
      name: "xcvASTR",
      symbol: "xcvASTR",
      decimals: 18,
    },
    glmr: {
      address: "0xAcc15dC74880C9944775448304B263D191c6077F",
      name: "GLMR",
      symbol: "GLMR",
      decimals: 18,
    },
    xcglmr: {
      address: "0x0000000000000000000000000000000000000802",
      name: "xcGLMR",
      symbol: "xcGLMR",
      decimals: 18,
    },
    xcvglmr: {
      address: "0xFfFfFFff99dABE1a8De0EA22bAa6FD48fdE96F6c",
      name: "xcvGLMR",
      symbol: "xcvGLMR",
      decimals: 18,
    },
  },
  moonriverTestnet: {
    slpx: {
      address: "0x0000000000000000000000000000000000000000",
    },
  },
  moonbaseTestnet: {
    slpx: {
      address: "0x0000000000000000000000000000000000000000",
    },
  },
  arbitrum: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
    vbnc: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
      name: "Bifrost Voucher BNC",
      symbol: "vBNC",
      decimals: 18,
    },
    bnc: {
      address: "0xf877500C6ff3cf8305245bCb3Cf1c5A6B7287aEF",
      name: "Bifrost Native Token",
      symbol: "BNC",
      decimals: 18,
    },
    vdot: {
      address: "0xBC33B4D48f76d17A1800aFcB730e8a6AAada7Fe5",
      name: "Bifrost Voucher DOT",
      symbol: "vDOT",
      decimals: 18,
    }
  },
  arbitrumSepolia: {
    slpx: {
      address: "0x62CA64454046BbC18e35066A6350Acb0378EB3c2",
    },
    eth: {
      address: "0x0000000000000000000000000000000000000000",
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    veth: {
      address: "0x0E011f93777B00f48B881B1Cabc5F0A6395BdC02",
      name: "vETH",
      symbol: "vETH",
      decimals: 18,
    },
    vdot: {
      address: "0x6C0AAb3F91C4e49F6442CCEb65973778Ab0A177A",
      name: "vDOT",
      symbol: "vDOT",
      decimals: 18,
    },
    dot: {
      address: "0x3A8EDecAb3E4178f06dD57be13676195571fEA2f",
      name: "DOT",
      symbol: "DOT",
      decimals: 18,
    },
  },
  base: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
    vbnc: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
      name: "Bifrost Voucher BNC",
      symbol: "vBNC",
      decimals: 18,
    },
    bnc: {
      address: "0xf877500C6ff3cf8305245bCb3Cf1c5A6B7287aEF",
      name: "Bifrost Native Token",
      symbol: "BNC",
      decimals: 18,
    },
    vdot: {
      address: "0xBC33B4D48f76d17A1800aFcB730e8a6AAada7Fe5",
      name: "Bifrost Voucher DOT",
      symbol: "vDOT",
      decimals: 18,
    }
  },
  baseSepolia: {
    slpx: {
      address: "0x262e52beD191a441CBD28dB151A11D7c41384F72",
    },
    eth: {
      address: "0x0000000000000000000000000000000000000000",
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    veth: {
      address: "0x6e0f9f2d25CC586965cBcF7017Ff89836ddeF9CC",
      name: "vETH",
      symbol: "vETH",
      decimals: 18,
    },
    vdot: {
      address: "0x8bFA30329F2A7A7b72fa4A76FdcE8aC92284bb94",
      name: "vDOT",
      symbol: "vDOT",
      decimals: 18,
    },
    dot: {
      address: "0x4B16E254E7848e0826eBDd3049474fD9E70A244c",
      name: "DOT",
      symbol: "DOT",
      decimals: 18,
    },
  },
  ethereum: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
    vbnc: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
      name: "Bifrost Voucher BNC",
      symbol: "vBNC",
      decimals: 18,
    },
    bnc: {
      address: "0xf877500C6ff3cf8305245bCb3Cf1c5A6B7287aEF",
      name: "Bifrost Native Token",
      symbol: "BNC",
      decimals: 18,
    },
    vdot: {
      address: "0xBC33B4D48f76d17A1800aFcB730e8a6AAada7Fe5",
      name: "Bifrost Voucher DOT",
      symbol: "vDOT",
      decimals: 18,
    }
  },
  ethereumSepolia: {
    slpx: {
      address: "0x262e52beD191a441CBD28dB151A11D7c41384F72",
    },
    eth: {
      address: "0x0000000000000000000000000000000000000000",
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    veth: {
      address: "0x6e0f9f2d25CC586965cBcF7017Ff89836ddeF9CC",
      name: "vETH",
      symbol: "vETH",
      decimals: 18,
    },
    vdot: {
      address: "0x8bFA30329F2A7A7b72fa4A76FdcE8aC92284bb94",
      name: "vDOT",
      symbol: "vDOT",
      decimals: 18,
    },
    dot: {
      address: "0x4B16E254E7848e0826eBDd3049474fD9E70A244c",
      name: "DOT",
      symbol: "DOT",
      decimals: 18,
    },
  },
  bsc: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
  },
  bscTestnet: {
    slpx: {
      address: "0xC4F238cEdC1f77A0Fe36F60eceDef14336e4eFbe",
    },
    vdot: {
      address: "0x1Ed8c557791e0c98D72387423ab5c215d358E5a4",
      name: "vDOT",
      symbol: "vDOT",
      decimals: 18,
    },
    dot: {
      address: "0x1dB58359534600b08Fe7061608920f1C47E7b0b0",
      name: "DOT",
      symbol: "DOT",
      decimals: 18,
    },
  },
  passetHub: {
    slpx: {
      address: "0xeB85DBa111Af2963746f1BdfFB976BE6e8f23E10",
    },
    vdot: {
      address: "0xef6f920fb3F0319C3b5188066E603F4F95ECF52c",
      name: "vDOT",
      symbol: "vDOT",
      decimals: 18,
    },
    dot: {
      address: "0xa46f44d17cc56e960d470F5Eae5FBcAb53b03e27",
      name: "DOT",
      symbol: "DOT",
      decimals: 18,
    },
  },
  unichainSepolia: {
    slpx: {
      address: "0x85bb6d27571C3175c81fe212c0decCA2202147b9",
    },
    eth: {
      address: "0x0000000000000000000000000000000000000000",
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    veth: {
      address: "0x7f6708716FDDFA4c2674eFa4ee20deF1b4d5C5aD",
      name: "vETH",
      symbol: "vETH",
      decimals: 18,
    },
    vdot: {
      address: "0x5fD7476f615C53929922130DC8bf297e1a011f75",
      name: "vDOT",
      symbol: "vDOT",
      decimals: 18,
    },
    dot: {
      address: "0x61E214E7d4DF2e619AF3F2eF4E590ABa4480259F",
      name: "DOT",
      symbol: "DOT",
      decimals: 18,
    },
  },
}

export const CHAIN_NAME_CHAIN_ID_MAP = {
  mantaPacific: 169,
  mantaPacificSepolia: 3441006,
  moonbeamMainnet: 1284,
  moonriverTestnet: 1285,
  moonbaseTestnet: 1287,
  arbitrum: 42161,
  arbitrumSepolia: 421614,
  base: 8453,
  baseSepolia: 84532,
  ethereum: 1,
  ethereumSepolia: 11155111,
  bsc: 56,
  bscTestnet: 97,
  passetHub: 420420422,
  unichainSepolia: 1301,
}

export const NATIVE_TOKEN_ADDRESS: Address = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"

export const paseoPassethub = {
  id: 420420422,
  name: "Paseo Passethub",
  network: "paseo-passethub",
  nativeCurrency: {
    name: "PAS",
    symbol: "PAS",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-passet-hub-eth-rpc.polkadot.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout-passet-hub.parity-testnet.parity.io",
    },
  },
} as const;