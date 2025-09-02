import { CONTRACT_ADDRESS_INFO } from "./constants";
import { SLPX_V2_ABI } from "./abis";

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