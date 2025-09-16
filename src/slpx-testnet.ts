import { CONTRACT_ADDRESS_INFO, CHAIN_NAME_CHAIN_ID_MAP } from "./constants";
import { TESTNET_SLPX_V2_ABI } from "./abis";
import { parseUnits } from "viem";
import { ValidTestnetChainInput, MintingAssetName } from "./types";
import { getTestnetAssetAddress } from "./utils";

//===============================================
// Function exports
//===============================================

/**
 * Estimates the fee for sending and calling a cross-chain transaction
 * @param underlyingAssetName - The name of the underlying asset
 * @param chain - The destination chain ID (currently supports Manta Pacific)
 * @param amount - The amount to send as a string (will be parsed with 18 decimals)
 * @param partnerCode - The partner code to use for the mint
 * @returns Contract call params for estimateSendAndCallFee function
 * @throws Error if underlying asset address is not supported for the given chain
 * @throws Error if amount is not a positive number
 * @throws Error if partner code is not a string
 */
export function getTestnetMintParams(underlyingAssetName: MintingAssetName, chain: ValidTestnetChainInput, amount: string, partnerCode: string = "bifrost") {
  // Check if the underlying asset address is valid
  const underlyingAssetAddress = getTestnetAssetAddress(underlyingAssetName, chain);
  
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

  // Check if the amount is a positive number
  if (Number(amount) <= 0) {
    throw new Error("Amount must be a positive number");
  }

  // Check if partner code is valid string
  if (typeof partnerCode !== "string") {
    throw new Error("Partner code must be a string");
  }

  const testnetMintParams = {
    address: CONTRACT_ADDRESS_INFO[chainName].slpx!.address,
    abi: TESTNET_SLPX_V2_ABI,
    functionName: "createOrder",
    args: [
      underlyingAssetAddress,
      parseUnits(amount, 18),
      0,
      partnerCode,
    ],
  }

  // Return the testnet mint params
  return testnetMintParams;
}