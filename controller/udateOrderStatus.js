import Order from "../models/order.js";

const updateOrderStatus = async (req, res) => {
  try {
    const updatedStatus = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedStatus);
  } catch (err) {
    res.status(400).json({ 
      message: err.message 
    });
  }
};

export default updateOrderStatus;
