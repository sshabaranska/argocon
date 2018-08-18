import {OhlcBarModel} from './ohlc-bar-model';

export class OhlcModel {
  public Symbol: string;
  public SecurityId: string;
  public DisplaySymbol: string;
  public Denominator: number;
  public From: string;
  public To: string;
  public PriceType: string;
  public IntervalType: string;
  public Type: string;
  public Bars: OhlcBarModel[];

  constructor() {
    this.Bars = [];
  }
}
