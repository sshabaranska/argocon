export class OrderModel {
  public ID: number;
  public OrigID: string;
  public ExchID: number;
  public Type: string;
  public TIF: string;
  public ExpirationTime: number;
  public OrderState: string;
  public OrderSide: string;
  public Qty: number;
  public OrigQty: number;
  public AvgPx: number;
  public LastQty: number;
  public LastPrice: number;
  public LimitPrice: number;
  public StopPrice: number;
  public TrailingOffset: number;
  public Text: string;
  public Destination: string;
  public SecId: number;
  public Symbol: string;
  public Account: string;
  public InitTime: number;
  public LastTime: number;
  public TradeId: string;
  public TotalFillQty: number;
  public Currency: string;
  public FillOrKillQty: number;
  public Exchange: string;
  public IsReplaced: string;
  public UserData: number;
  public IsStopPriceTriggered: string;
  public IsWorking: string;
  public IsCompleted: string;
  public IsUnconfirmed: string;
}
