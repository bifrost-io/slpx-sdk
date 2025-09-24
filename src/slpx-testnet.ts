import { CONTRACT_ADDRESS_INFO, CHAIN_NAME_CHAIN_ID_MAP } from "./constants";
import { TESTNET_SLPX_V2_ABI } from "./abis";
import { parseUnits } from "viem";
import {
  ValidTestnetChainInput,
  MintingAssetName,
  TestnetChainName,
} from "./types";
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
export function getTestnetMintParams(
  underlyingAssetName: MintingAssetName,
  chainName: TestnetChainName,
  amount: string,
  partnerCode: string = "bifrost"
) {
  // Check if the underlying asset address is valid
  const underlyingAssetAddress = getTestnetAssetAddress(
    underlyingAssetName,
    chainName
  );

  if (!chainName || !CONTRACT_ADDRESS_INFO[chainName]?.slpx?.address) {
    throw new Error(`No contract address found for chain ID: ${chainName}`);
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
    args: [underlyingAssetAddress, parseUnits(amount, 18), 0, partnerCode],
  };

  // Return the testnet mint params
  return testnetMintParams;
}

/**
 * Estimates the fee for converting an asset on a testnet chain
 * @param underlyingAssetName - The name of the underlying asset
 * @param chainName - The name of the testnet chain
 * @param amount - The amount to convert as a string (will be parsed with 18 decimals)
 * @param partnerCode - The partner code to use for the mint
 * @returns Contract call params for getTokenConversionInfo function
 * @throws Error if underlying asset address is not supported for the given chain
 * @throws Error if amount is not a positive number
 * @throws Error if partner code is not a string
 */
export function getTestnetConversionParams(
  underlyingAssetName: MintingAssetName,
  chainName: TestnetChainName,
  amount: string,
  partnerCode: string = "bifrost"
) {
  const underlyingAssetAddress = getTestnetAssetAddress(
    underlyingAssetName,
    chainName
  );

  if (!chainName || !CONTRACT_ADDRESS_INFO[chainName]?.slpx?.address) {
    throw new Error(`No contract address found for chain ID: ${chainName}`);
  }

  // Check if the amount is a positive number
  if (Number(amount) <= 0) {
    throw new Error("Amount must be a positive number");
  }

  // Check if partner code is valid string
  if (typeof partnerCode !== "string") {
    throw new Error("Partner code must be a string");
  }

  const testnetConversionParams = {
    address: CONTRACT_ADDRESS_INFO[chainName].slpx?.address,
    abi: TESTNET_SLPX_V2_ABI,
    functionName: "getTokenConversionInfo",
    args: [underlyingAssetAddress],
  };

  return testnetConversionParams;
}
