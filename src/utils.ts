// UTILITY FUNCTIONS

import { CONTRACT_ADDRESS_INFO, CHAIN_NAME_CHAIN_ID_MAP } from "./constants";
import {
  MintingAssetName,
  ValidTestnetChainInput,
  TestnetChainName,
  ValidMainnetChainInput,
  MainnetChainName,
} from "./types";


/**
 * Get the address of an asset on a testnet chain
 * @param assetName - The name of the asset
 * @param chain - The name or chain ID of the testnet chain
 * @returns The address of the asset
 * @throws Error if the asset is not found on the chain
 * @throws Error if the chain is not supported
 */
export function getTestnetAssetAddress(
  assetName: MintingAssetName,
  chain: ValidTestnetChainInput
): string {

  let chainName: TestnetChainName | MainnetChainName;

  if (typeof chain === "number") {
    chainName = getChainNameFromChainId(chain) as TestnetChainName | MainnetChainName;
  } else {
    chainName = chain;
  }

  // Get the network contract info for the chain
  const networkInfo = CONTRACT_ADDRESS_INFO[chainName];

  if (!networkInfo) {
    throw new Error(`Unsupported chain: ${chainName}`);
  }

  // Get the asset info from the network
  const assetInfo = networkInfo[assetName];
  if (!assetInfo) {
    throw new Error(`Asset ${assetName} not found on chain ${chainName}`);
  }

  return assetInfo.address;
}

/**
 * Get the address of an asset on a mainnet chain
 * @param assetName - The name of the asset
 * @param chain - The name or chain ID of the mainnet chain
 * @returns The address of the asset
 * @throws Error if the asset is not found on the chain
 * @throws Error if the chain is not supported
 */
export function getMainnetAssetAddress(
  assetName: MintingAssetName,
  chain: ValidMainnetChainInput
): string {
  // Convert chain ID to chain name if needed
  let chainName: MainnetChainName | TestnetChainName;

  if (typeof chain === "number") {
    chainName = getChainNameFromChainId(chain) as MainnetChainName | TestnetChainName;
  } else {
    chainName = chain;
  }

  // Get the network contract info for the chain
  const networkInfo = CONTRACT_ADDRESS_INFO[chainName];

  if (!networkInfo) {
    throw new Error(`Unsupported chain: ${chainName}`);
  }

  // Get the asset info from the network
  const assetInfo = networkInfo[assetName];
  if (!assetInfo) {
    throw new Error(`Asset ${assetName} not found on chain ${chainName}`);
  }

  return assetInfo.address;
}

/**
 * Get the name of a chain from its chain ID
 * @param chainId - The chain ID
 * @returns The name of the chain
 * @throws Error if the chain is not supported
 */
export function getChainNameFromChainId(chainId: number): TestnetChainName | MainnetChainName {
  const identifiedChainName = Object.entries(CHAIN_NAME_CHAIN_ID_MAP).find(
    ([, id]) => id === chainId
  )?.[0];

  if (!identifiedChainName) {
    throw new Error(`Unsupported chain ID: ${chainId}`);
  }

  return identifiedChainName as TestnetChainName | MainnetChainName;
}
