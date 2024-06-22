import Order from "../models/order.js";

const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("product");
    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default getOrder;
