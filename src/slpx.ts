export class Slpx {
  private rspId: string;

  constructor(rspId: string = "bifrost") {
    this.rspId = rspId;
  }

  public getRspId(): string {
    return this.rspId;
  }
}