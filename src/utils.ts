// UTILITY FUNCTIONS

import { CONTRACT_ADDRESS_INFO, CHAIN_NAME_CHAIN_ID_MAP } from "./constants";
import { AssetName, ValidTestnetChainInput, TestnetChainName } from "./types";

export function getTestnetAssetAddress(assetName: AssetName, chain: ValidTestnetChainInput): string {
  // Convert chain ID to chain name if needed
  let chainName: TestnetChainName;
  
  if (typeof chain === "number") {
    // Find chain name by chain ID
    const foundChainName = Object.entries(CHAIN_NAME_CHAIN_ID_MAP).find(
      ([, chainId]) => chainId === chain
    )?.[0] as TestnetChainName;
    
    if (!foundChainName) {
      throw new Error(`Unsupported chain ID: ${chain}`);
    }
    
    chainName = foundChainName;
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