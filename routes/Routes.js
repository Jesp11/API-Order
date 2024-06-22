import express from "express";
const router = express.Router();

import getOrders from "../controller/getAllOrders.js";
import getOrder from "../controller/getOrder.js"
import createOrder from "../controller/createOrder.js";
import updateOrderStatus from "../controller/udateOrderStatus.js";
import deleteOrder from "../controller/deleteOrder.js";

router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/create", createOrder);
router.put("/update/:id", updateOrderStatus);
router.delete("/delete/:id", deleteOrder);

export default router;
