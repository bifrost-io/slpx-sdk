import { CONTRACT_ADDRESS_INFO } from "./constants";

export class Slpx {
  private rspId: string;

  constructor(rspId: string = "bifrost") {
    this.rspId = rspId;
  }

  public getRspId(): string {
    return this.rspId;
  }

  public getContractAddressInfo(consoleLog = false) {
    if (consoleLog) {
      console.log(CONTRACT_ADDRESS_INFO);
    }
    return CONTRACT_ADDRESS_INFO;
  }
}