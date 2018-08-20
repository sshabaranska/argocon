export class PriceInfoModel {
  public Symbol: string;
  public SecurityId: string;
  public DisplaySymbol: string;
  public Denominator: number;
  public LastTradePrice: number;
  public BestBidPrice: number;
  public BestBidQty: number;
  public BestOfferPrice: number;
  public BestOfferQty: number;
  public LastTradeQty: number;
  public OpenPrice: number;
  public HighPrice: number;
  public LowPrice: number;
  public ClosePrice: number;
  public PreviousClosePrice: number;
  public TotalTradedVolume: number;

  constructor() {
    this.PreviousClosePrice = 0;
    this.LastTradePrice = 0;
  }
}

