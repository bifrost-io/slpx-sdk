import { CONTRACT_ADDRESS_INFO, CHAIN_NAME_CHAIN_ID_MAP } from "./constants";
import { SLPX_V2_ABI, MANTA_SLPX_V1_ABI, MOONBEAM_XCM_ORACLE_ABI } from "./abis";
import { MintingAssetName, ValidMainnetChainInput } from "./types";
import { getMainnetAssetAddress } from "./utils";
import { parseUnits, encodePacked } from "viem";
import { manta, moonbeam } from "viem/chains"

//===============================================
// Function exports
//===============================================

/**
 * Estimates the fee for sending and calling a cross-chain transaction
 * @param asset - The token contract address to send (e.g. 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE for native token, or token address)
 * @param chainId - The destination chain ID (currently supports Manta Pacific)
 * @param amount - The amount to send as a string (will be parsed with 18 decimals)
 * @returns Contract call params for estimateSendAndCallFee function
 * @throws Error if asset is not supported for the given chain
 */
export function getEstimateSendAndCallFeeParams(underlyingAssetName: MintingAssetName, chain: ValidMainnetChainInput, amount: string, partnerCode: string = "bifrost") {

  // Check if the underlying asset address is valid
  const underlyingAssetAddress = getMainnetAssetAddress(underlyingAssetName, chain);
  
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
}

export function getMintParams(asset: string, chainId: number, amount: string) {
  switch (chainId) {
    case manta.id:
      // throw error if not MANTA token
      if (asset !== CONTRACT_ADDRESS_INFO.mantaPacific.manta?.address) {
        throw new Error("Asset is not MANTA token");
      }
      // Otherwise return params
      return {
        address: CONTRACT_ADDRESS_INFO.mantaPacific.slpx?.address,
      }
    default:
      throw new Error("Chain ID is not valid or unsupported");
  }
}

/**
 * Returns the contract address info
 * @param consoleLog - Whether to console log the contract address info
 * @returns 
 */
export function getContractAddressInfo(consoleLog = false) {
  if (consoleLog) {
    console.log(CONTRACT_ADDRESS_INFO, 2, 2);
  }
  return CONTRACT_ADDRESS_INFO;
}

/**
 * Returns the SLPX v2 ABI
 * @param consoleLog - Whether to console log the SLPX v2 ABI
 * @returns SLPX v2 ABI
 */
export function getSlpxAbi(consoleLog = false) {
  if (consoleLog) {
    console.log(SLPX_V2_ABI, 2, 2);
  }
  return SLPX_V2_ABI;
}




//===============================================
// Class export
//===============================================

export class Slpx {
  private rspId: string;

  constructor(rspId: string = "bifrost") {
    this.rspId = rspId;
  }

  public getRspId(): string {
    return this.rspId;
  }

  // return or console log the contract address info
  public getContractAddressInfo(consoleLog = false) {
    if (consoleLog) {
      console.log(CONTRACT_ADDRESS_INFO, 2, 2);
    }
    return CONTRACT_ADDRESS_INFO;
  }

  // return or console log the slpx abi
  public getSlpxAbi(consoleLog = false) {
    if (consoleLog) {
      console.log(SLPX_V2_ABI, 2, 2);
    }
    return SLPX_V2_ABI;
  }

  public getAssetToVassetConversionRate(asset: string, vasset: string) {
    return 1;
  }
}