import { ContractAddressInfo, PublicRpcUrls } from "./types";
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
    vManta: {
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
    xcDot: {
      address: "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",
      name: "xcDOT",
      symbol: "xcDOT",
      decimals: 10,
    },
    xcvDOT: {
      address: "0xFFFfffFf15e1b7E3dF971DD813Bc394deB899aBf",
      name: "xcvDOT",
      symbol: "xcvDOT",
      decimals: 10,
    },
    xcASTR: {
      address: "0xFfFFFfffA893AD19e540E172C10d78D4d479B5Cf",
      name: "xcASTR",
      symbol: "xcASTR",
      decimals: 18,
    },
    xcvASTR: {
      address: "0xFffFffff55C732C47639231a4C4373245763d26E",
      name: "xcvASTR",
      symbol: "xcvASTR",
      decimals: 18,
    },
    GLMR: {
      address: "0xAcc15dC74880C9944775448304B263D191c6077F",
      name: "GLMR",
      symbol: "GLMR",
      decimals: 18,
    },
    xcGLMR: {
      address: "0x0000000000000000000000000000000000000802",
      name: "xcGLMR",
      symbol: "xcGLMR",
      decimals: 18,
    },
    xcvGLMR: {
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
    vBNC: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
      name: "Bifrost Voucher BNC",
      symbol: "vBNC",
      decimals: 18,
    },
    BNC: {
      address: "0xf877500C6ff3cf8305245bCb3Cf1c5A6B7287aEF",
      name: "Bifrost Native Token",
      symbol: "BNC",
      decimals: 18,
    },
    vDOT: {
      address: "0xBC33B4D48f76d17A1800aFcB730e8a6AAada7Fe5",
      name: "Bifrost Voucher DOT",
      symbol: "vDOT",
      decimals: 18,
    }
  },
  arbitrumSepolia: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
  },
  base: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
    vBNC: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
      name: "Bifrost Voucher BNC",
      symbol: "vBNC",
      decimals: 18,
    },
    BNC: {
      address: "0xf877500C6ff3cf8305245bCb3Cf1c5A6B7287aEF",
      name: "Bifrost Native Token",
      symbol: "BNC",
      decimals: 18,
    },
    vDOT: {
      address: "0xBC33B4D48f76d17A1800aFcB730e8a6AAada7Fe5",
      name: "Bifrost Voucher DOT",
      symbol: "vDOT",
      decimals: 18,
    }
  },
  baseSepolia: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
  },
  ethereum: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
    vBNC: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
      name: "Bifrost Voucher BNC",
      symbol: "vBNC",
      decimals: 18,
    },
    BNC: {
      address: "0xf877500C6ff3cf8305245bCb3Cf1c5A6B7287aEF",
      name: "Bifrost Native Token",
      symbol: "BNC",
      decimals: 18,
    },
    vDOT: {
      address: "0xBC33B4D48f76d17A1800aFcB730e8a6AAada7Fe5",
      name: "Bifrost Voucher DOT",
      symbol: "vDOT",
      decimals: 18,
    }
  },
  ethereumSepolia: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
  },
  bsc: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
    vBNC: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
      name: "Bifrost Voucher BNC",
      symbol: "vBNC",
      decimals: 18,
    },
    BNC: {
      address: "0xf877500C6ff3cf8305245bCb3Cf1c5A6B7287aEF",
      name: "Bifrost Native Token",
      symbol: "BNC",
      decimals: 18,
    },
    vDOT: {
      address: "0xBC33B4D48f76d17A1800aFcB730e8a6AAada7Fe5",
      name: "Bifrost Voucher DOT",
      symbol: "vDOT",
      decimals: 18,
    }
  },
  bscTestnet: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
  },
  passetHub: {
    slpx: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
    },
    vBNC: {
      address: "0x61c57c187557442393a96bA8e6FDfE27610832a5",
      name: "Bifrost Voucher BNC",
      symbol: "vBNC",
      decimals: 18,
    },
  }
}

export const PUBLIC_RPC_URLS: PublicRpcUrls = {
  mantaPacific: "https://manta-pacific.drpc.org",
  moonbeamMainnet: "https://rpc.api.moonbeam.network",
}

export const CHAIN_NAME_CHAIN_ID_MAP = {
  mantaPacific: 169,
  moonbeamMainnet: 1284,
  moonriverTestnet: 1285,
  moonbaseTestnet: 1287,
  arbitrum: 42161,
  arbitrumSepolia: 421613,
  base: 8453,
  baseSepolia: 84531,
  ethereum: 1,
  ethereumSepolia: 11155111,
  bsc: 56,
  bscTestnet: 97,
  passetHub: 100,
}

export const NATIVE_TOKEN_ADDRESS: Address = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"

// Utility functions for chain name/ID lookup
export type ChainName = keyof typeof CHAIN_NAME_CHAIN_ID_MAP
export type ChainId = typeof CHAIN_NAME_CHAIN_ID_MAP[ChainName]

/**
 * Get chain ID by chain name
 * @param chainName - The chain name
 * @returns The corresponding chain ID or undefined if not found
 */
export function getChainIdByName(chainName: ChainName): ChainId | undefined {
  return CHAIN_NAME_CHAIN_ID_MAP[chainName]
}

/**
 * Get chain name by chain ID
 * @param chainId - The chain ID
 * @returns The corresponding chain name or undefined if not found
 */
export function getChainNameById(chainId: ChainId): ChainName | undefined {
  const entry = Object.entries(CHAIN_NAME_CHAIN_ID_MAP).find(
    ([_, id]) => id === chainId
  )
  return entry ? (entry[0] as ChainName) : undefined
}

/**
 * Check if a chain name exists
 * @param chainName - The chain name to check
 * @returns True if the chain name exists
 */
export function isValidChainName(chainName: string): chainName is ChainName {
  return chainName in CHAIN_NAME_CHAIN_ID_MAP
}

/**
 * Check if a chain ID exists
 * @param chainId - The chain ID to check
 * @returns True if the chain ID exists
 */
export function isValidChainId(chainId: number): chainId is ChainId {
  return Object.values(CHAIN_NAME_CHAIN_ID_MAP).includes(chainId as ChainId)
}

/**
 * Get all available chain names
 * @returns Array of all chain names
 */
export function getAllChainNames(): ChainName[] {
  return Object.keys(CHAIN_NAME_CHAIN_ID_MAP) as ChainName[]
}

/**
 * Get all available chain IDs
 * @returns Array of all chain IDs
 */
export function getAllChainIds(): ChainId[] {
  return Object.values(CHAIN_NAME_CHAIN_ID_MAP)
}