import Order from "../models/order.js";

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("product");
    res.json(orders);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default getOrders;
