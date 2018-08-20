import {TimeAndSaleModel} from './time-and-sale-model';

export class TimeAndSalesModel {
  public Symbol: string;
  public SecurityId: string;
  public DisplaySymbol: string;
  public Denominator: number;
  public TimeAndSales: TimeAndSaleModel[];

  constructor() {
    this.TimeAndSales = [];
  }
}
