export class AdvertisingController {
  public advertisingAmount: number = 0;

  public requiredToBuy: number = 0.5;

  public giveWhenBuy: number = 0.2;

  public disabledAdvertising: boolean = true;

  public checkMoneyAdvertising(moneyQuantity: number): void {
    if (moneyQuantity >= this.requiredToBuy) {
      this.disabledAdvertising = false;
    } else {
      this.disabledAdvertising = true;
    }
  }

  public addAdvertising()
  {
    let currentGiveWhenBuy = this.giveWhenBuy;
    this.requiredToBuy = 2 * this.requiredToBuy;
    this.giveWhenBuy = 0.5 * this.giveWhenBuy;
    this.advertisingAmount++;

    return currentGiveWhenBuy;
  }
}
