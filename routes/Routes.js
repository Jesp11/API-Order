import express from "express";
const router = express.Router();

import getOrders from "../controller/getAllOrders.js";
import getOrder from "../controller/getOrder.js"
import createOrder from "../controller/createOrder.js";
import updateOrderStatus from "../controller/udateOrderStatus.js";
import deleteOrder from "../controller/deleteOrder.js";

router.get("/orders", getOrders);
router.get("/orders/:id", getOrder);
router.post("/orders", createOrder);
router.put("/orders/:id", updateOrderStatus);
router.delete("/orders/:id", deleteOrder);

export default router;
