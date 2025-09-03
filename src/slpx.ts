import { CONTRACT_ADDRESS_INFO } from "./constants";
import { SLPX_V2_ABI, MANTA_SLPX_V1_ABI } from "./abis";
import { parseUnits, encodePacked } from "viem";
import { manta } from "viem/chains"

//===============================================
// Function exports
//===============================================

/**
 * Estimates the fee for sending and calling a cross-chain transaction
 * @param asset - The token contract address to send (e.g. 0xeeeEEEeEEeeeEeEeEEEeEeeeeEEEEeEEeEeeeeeE for native token, or token address)
 * @param chainId - The destination chain ID (currently supports Manta Pacific)
 * @param amount - The amount to send as a string (will be parsed with 18 decimals)
 * @returns Contract call params for estimateSendAndCallFee function
 * @throws Error if asset is not supported for the given chain
 */
export function getEstimateSendAndCallFeeParams(asset: string, chainId: number, amount: string) {
  switch (chainId) {
    // Handle Manta Pacific (SLPX v1)
    case manta.id:
      // throw error if not MANTA token
      if (asset !== CONTRACT_ADDRESS_INFO.mantaPacific.manta?.address) {
        throw new Error("Asset is not MANTA token");
      }
      // Otherwise return params
      return {
        address: CONTRACT_ADDRESS_INFO.mantaPacific.slpx?.address,
        abi: MANTA_SLPX_V1_ABI,
        functionName: "estimateSendAndCallFee",
        args: [
          asset, // MANTA token
          parseUnits(amount, 18), // amount
          0, // channel_id
          4000000, // dstGasForCall
          encodePacked(["uint16", "uint256"], [1, BigInt(4200000)]), // adapterParams
        ],
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