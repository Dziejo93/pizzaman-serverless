import { Document } from "mongoose";
import mongooseInstance from "../../config/mongoose";
import OrderModel from "./order-model";

export interface OrderInterface extends Document {
  pizza: string;
  address: string;
  orderStatus: string;
}

export default mongooseInstance.model<OrderInterface>("Order", OrderModel);
