/** @format */

const express = require("express");
const router = express.Router();
const paymentService = require("../Service/paymentService");

router.post("/payments", paymentService.processPayment);
router.get("/payments/:paymentId", paymentService.getPayment);

module.exports = router;
