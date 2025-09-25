import { CONTRACT_ADDRESS_INFO, CHAIN_NAME_CHAIN_ID_MAP } from "./constants";
import {
  SLPX_V2_ABI,
  MANTA_SLPX_V1_ABI,
  MOONBEAM_XCM_ORACLE_ABI,
} from "./abis";
import { MintingAssetName, MainnetChainName } from "./types";
import { getMainnetAssetAddress } from "./utils";
import { parseUnits, encodePacked, Address } from "viem";
import { moonbeam } from "viem/chains";

//===============================================
// Function exports
//===============================================

/**
 * Estimates the fee for sending and calling a cross-chain transaction
 * @param underlyingAssetName - The name of the underlying asset
 * @param chainName - The name of the mainnet chain
 * @param amount - The amount to send as a string (will be parsed with 18 decimals)
 * @param partnerCode - The partner code to use for the mint
 * @param amount - The amount to send as a string (will be parsed with 18 decimals)
 * @returns Contract call params for estimateSendAndCallFee function
 * @throws Error if asset is not supported for the given chain
 */
export function getEstimateSendAndCallFeeParams(
  underlyingAssetName: MintingAssetName,
  chainName: MainnetChainName,
  amount: string,
  partnerCode: string = "bifrost"
) {

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
}

export function getMintParams(
  underlyingAssetName: MintingAssetName,
  chainName: MainnetChainName,
  amount: string,
  receiverAddress: Address,
  partnerCode: string = "bifrost"
) {

  // Check if the underlying asset address is valid
  const underlyingAssetAddress = getMainnetAssetAddress(
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
  
  switch (chainName) {
    case "moonbeamMainnet":
      // Otherwise return params
      return {
        address: CONTRACT_ADDRESS_INFO[chainName].slpx?.address,
        abi: MANTA_SLPX_V1_ABI,
        functionName: "create_order",
        args: [
          underlyingAssetAddress, // xcDOT token address 
          parseUnits(amount, 10), // amount
          1284, // Moonbeam chain id
          receiverAddress, // receiver
          partnerCode, // sample remark
          0, // sample channel_id
        ],
      };
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
