export class TradeHistoryModel {
  public OrderID: string;
  public ExchID: string;
  public ID: string;
  public InitTime: number;
  public OrderSide: string;
  public Price: number;
  public LimitPrice: number;
  public Qty: number;
  public Symbol: string;
  public SecId: number;
  public Currency: string;
  public Account: string;
  public ExchangeDestination: string;
  public TradeState: string;
  public IsOtherDayFill: string;
  public ParentTradeId: string;
  public ExecRepFlags: number;
  public IsImplied: string;
  public IsEts: string;
  public IsCorrected: string;
  public IsMakingPosition: string;
  public MatchedQty: number;
  public PosQty: number;
  public Text: string;
}
