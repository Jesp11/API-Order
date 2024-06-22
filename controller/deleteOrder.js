import Order from "../models/order.js";

const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndRemove(req.params.id);
    res.json({
      message: "Order deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default deleteOrder;
