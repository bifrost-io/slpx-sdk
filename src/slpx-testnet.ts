import { CONTRACT_ADDRESS_INFO } from "./constants";
import { TESTNET_SLPX_V2_ABI } from "./abis";
import { parseUnits } from "viem";
import {
  MintingAssetName,
  TestnetChainName,
  ValidTestnetChainInput,
} from "./types";
import { getTestnetAssetAddress, getChainNameFromChainId } from "./utils";

//===============================================
// Function exports
//===============================================

/**
 * Estimates the fee for minting an asset on a testnet chain
 * @param underlyingAssetName - The name of the underlying asset
 * @param chain - The name or chain ID of the testnet chain
 * @param amount - The amount to send as a string (will be parsed with 18 decimals)
 * @param partnerCode - The partner code to use for the mint
 * @returns Contract call params for estimateSendAndCallFee function
 * @throws Error if underlying asset address is not supported for the given chain
 * @throws Error if amount is not a positive number
 * @throws Error if partner code is not a string
 */
export function getTestnetMintParams(
  underlyingAssetName: MintingAssetName,
  chain: ValidTestnetChainInput,
  amount: string,
  partnerCode: string = "bifrost"
) {
  // Check if the underlying asset address is valid
  const underlyingAssetAddress = getTestnetAssetAddress(
    underlyingAssetName,
    chain
  );

  let chainName: TestnetChainName;

  if (typeof chain === "number") {
    chainName = getChainNameFromChainId(chain) as TestnetChainName;
  } else {
    chainName = chain;
  }

  if (!CONTRACT_ADDRESS_INFO[chainName]?.slpx?.address) {
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

  // Default case for eip7702 === false
  const testnetMintParams = {
    address: CONTRACT_ADDRESS_INFO[chainName].slpx!.address,
    abi: TESTNET_SLPX_V2_ABI,
    functionName: "createOrder",
    value: underlyingAssetName === "eth" ? parseUnits(amount, 18) : undefined,
    args: [underlyingAssetAddress, parseUnits(amount, 18), 0, partnerCode],
  };

  return testnetMintParams;
}

/**
 * Estimates the fee for minting an asset on a testnet chain with EIP-7702 standard
 * @param underlyingAssetName - The name of the underlying asset
 * @param chain - The name or chain ID of the testnet chain
 * @param amount - The amount to send as a string (will be parsed with 18 decimals)
 * @param partnerCode - The partner code to use for the mint
 * @returns Contract call params for estimateSendAndCallFee function
 * @throws Error if underlying asset address is not supported for the given chain
 * @throws Error if amount is not a positive number
 * @throws Error if partner code is not a string
 */
export function getTestnetMintParamsWithEip7702(
  underlyingAssetName: MintingAssetName,
  chain: ValidTestnetChainInput,
  amount: string,
  partnerCode: string = "bifrost"
) {
  // Check if the underlying asset address is valid
  const underlyingAssetAddress = getTestnetAssetAddress(
    underlyingAssetName,
    chain
  );

  let chainName: TestnetChainName;

  if (typeof chain === "number") {
    chainName = getChainNameFromChainId(chain) as TestnetChainName;
  } else {
    chainName = chain;
  }

  if (!CONTRACT_ADDRESS_INFO[chainName]?.slpx?.address) {
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

  // Default case for eip7702 === false
  const testnetMintParams = {
    to: CONTRACT_ADDRESS_INFO[chainName].slpx!.address,
    abi: TESTNET_SLPX_V2_ABI,
    functionName: "createOrder",
    value: underlyingAssetName === "eth" ? parseUnits(amount, 18) : undefined,
    args: [underlyingAssetAddress, parseUnits(amount, 18), 0, partnerCode],
  };

  return testnetMintParams;
}

/**
 * Estimates the fee for redeeming an asset on a testnet chain
 * @param underlyingAssetName - The name of the underlying asset
 * @param chain - The name or chain ID of the testnet chain
 * @param amount - The amount to send as a string (will be parsed with 18 decimals)
 * @param partnerCode - The partner code to use for the mint
 * @param eip7702 - Whether to use EIP-7702 standard
 * @returns Contract call params for createOrder function
 * @throws Error if underlying asset address is not supported for the given chain
 * @throws Error if amount is not a positive number
 * @throws Error if partner code is not a string
 */
export function getTestnetRedeemParams(
  underlyingAssetName: MintingAssetName,
  chain: ValidTestnetChainInput,
  amount: string,
  partnerCode: string = "bifrost",
) {
  // Check if the underlying asset address is valid
  const underlyingAssetAddress = getTestnetAssetAddress(
    underlyingAssetName,
    chain
  );

  let chainName: TestnetChainName;

  if (typeof chain === "number") {
    chainName = getChainNameFromChainId(chain) as TestnetChainName;
  } else {
    chainName = chain;
  }

  if (!CONTRACT_ADDRESS_INFO[chainName]?.slpx?.address) {
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

  const testnetRedeemParams = {
    address: CONTRACT_ADDRESS_INFO[chainName].slpx!.address,
    abi: TESTNET_SLPX_V2_ABI,
    functionName: "createOrder",
    args: [underlyingAssetAddress, parseUnits(amount, 18), 1, partnerCode],
  };

  // Return the testnet mint params
  return testnetRedeemParams;
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
  chain: ValidTestnetChainInput,
) {
  const underlyingAssetAddress = getTestnetAssetAddress(
    underlyingAssetName,
    chain
  );

  let chainName: TestnetChainName;

  if (typeof chain === "number") {
    chainName = getChainNameFromChainId(chain) as TestnetChainName;
  } else {
    chainName = chain;
  }

  if (!CONTRACT_ADDRESS_INFO[chainName]?.slpx?.address) {
    throw new Error(`No contract address found for chain ID: ${chainName}`);
  }

  const testnetConversionParams = {
    address: CONTRACT_ADDRESS_INFO[chainName].slpx!.address,
    abi: TESTNET_SLPX_V2_ABI,
    functionName: "getTokenConversionInfo",
    args: [underlyingAssetAddress],
  };

  return testnetConversionParams;
}


