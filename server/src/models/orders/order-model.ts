import { Schema } from "mongoose";

export default new Schema({
  pizza: String,
  address: String,
  orderStatus: String,
});
