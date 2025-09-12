import { CONTRACT_ADDRESS_INFO, CHAIN_NAME_CHAIN_ID_MAP } from "./constants";
import { TESTNET_SLPX_V2_ABI } from "./abis";
import { parseUnits } from "viem";

//===============================================
// Function exports
//===============================================

export function getTestnetMintParams(asset: string, chain: number | string, amount: string, partnerCode: string = "bifrost") {
  let chainId: number;
  
  if (typeof chain === "string") {
    // Look up chain name in CHAIN_NAME_CHAIN_ID_MAP
    const mappedChainId = CHAIN_NAME_CHAIN_ID_MAP[chain as keyof typeof CHAIN_NAME_CHAIN_ID_MAP];
    if (!mappedChainId) {
      throw new Error(`Unknown chain name: ${chain}`);
    }
    chainId = mappedChainId;
  } else {
    chainId = chain;
  }

  // Get the chain name from chain ID to access CONTRACT_ADDRESS_INFO
  const chainName = Object.keys(CHAIN_NAME_CHAIN_ID_MAP).find(
    key => CHAIN_NAME_CHAIN_ID_MAP[key as keyof typeof CHAIN_NAME_CHAIN_ID_MAP] === chainId
  ) as keyof typeof CONTRACT_ADDRESS_INFO;

  if (!chainName || !CONTRACT_ADDRESS_INFO[chainName]?.slpx?.address) {
    throw new Error(`No contract address found for chain ID: ${chainId}`);
  }

  const testnetMintParams = {
    address: CONTRACT_ADDRESS_INFO[chainName].slpx!.address,
    abi: TESTNET_SLPX_V2_ABI,
    functionName: "createOrder",
    args: [
      asset,
      parseUnits(amount, 18),
      0,
      partnerCode,
    ],
  }

  // Return the testnet mint params
  return testnetMintParams;
}