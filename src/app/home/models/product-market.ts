export class ProductMarket {
  public Security: string;
  public Price: number;
  public Change: number;
  public Volume: number;

  constructor(
    Security: string,
    Price: number,
    Change: number,
    Volume: number
  ) {
    this.Security = Security;
    this.Price = Price;
    this.Change = Change;
    this.Volume = Volume;
  }
}


