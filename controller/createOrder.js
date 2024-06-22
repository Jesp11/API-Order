import Order from "../models/order.js";

const createOrder = async (req, res) => {
  try {
    const { customerName, productId, quantity } = req.body;

    const product = await product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const order = new Order({
      customerName,
      product: product._id,
      quantity,
      status: "pending",
    });

    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export default createOrder;
