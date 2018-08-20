import {DepthLevelModel} from './depth-level-model';

export class DepthModel {
  public Symbol: string;
  public SecurityId: string;
  public DisplaySymbol: string;
  public Denominator: number;
  public buy_levels: DepthLevelModel[];
  public sell_levels: DepthLevelModel[];

  constructor() {
    this.buy_levels = [];
    this.sell_levels = [];
  }
}
