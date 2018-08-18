import {OrderModel} from './order-model';

export class OrdersModel {
  public orders: OrderWrapperModel[];
}

export class OrderWrapperModel {
  public order: OrderModel[];
}
