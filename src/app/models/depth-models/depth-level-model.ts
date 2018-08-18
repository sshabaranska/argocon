export class DepthLevelModel {
  public Price: number;
  public Qty: number;
  public NumOfOrders: number;

  constructor(
    Price: number,
    Qty: number,
    NumOfOrders: number
  ) {
    this.Price = Price;
    this.Qty = Qty;
    this.NumOfOrders = NumOfOrders;
  }
}

