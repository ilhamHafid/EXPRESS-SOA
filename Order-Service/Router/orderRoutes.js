/** @format */

const express = require("express");
const router = express.Router();
const orderService = require("../Service/orderService");

router.post("/orders", orderService.createOrder);
router.get("/orders/:orderId", orderService.getOrder);

module.exports = router;
