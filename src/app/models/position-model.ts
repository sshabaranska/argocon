export class PositionModel {
  public Id: string;
  public Account: string;
  public SecurityId: number;
  public Symbol: string;
  public Exchange: string;
  public TradePrice: number;
  public AveragePrice: number;
  public Value: number;
  public RealizedPNL: number;
  public UnrealizedPNL: number;
  public Qty: number;
  public SettlementUnrealizedPNL: number;
  public SettlementRealizedPNL: number;
  public MaintenanceQty: number;
  public InitialQty: number;
  public InitialMargin: number;
  public MaintenanceMargin: number;
  public ParentSecurityId: number;
  public WorkingBuys: number;
  public WorkingSells: number;
}
