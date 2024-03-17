import { RestaurantType } from "./RestaurantTypes";
import { User } from "./UserTypes";

export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";

export type OrderType = {
  _id: string;
  restaurant: RestaurantType;
  user: User;
  cartItems: {
    menuItemId: string;
    name: string;
    quantity: string;
  }[];
  deliveryDetails: {
    name: string;
    addressLine1: string;
    city: string;
    email: string;
  };
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  restaurantId: string;
};

export type UpdateOrderStatusRequestType = {
    orderId:string;
    status:string;
}