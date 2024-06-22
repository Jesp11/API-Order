import mongoose, { Schema } from "mongoose";

const orderSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  status: {
    type: String,
    enum: ["pending", "in_progress", "completed"],
    default: "pending",
  },
  orderDate: {
    type: Date,
    default: Date.time,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
