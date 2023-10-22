/** @format */

const express = require("express");
const axios = require("axios"); // You'll need Axios for making HTTP requests
const router = express.Router();
const orderServiceUrl = "http://localhost:3000";
const paymentServiceUrl = "http://localhost:3001";

// Route POST /orders to the Order Service
router.post("/orders", async (req, res) => {
  try {
    const response = await axios.post(
      `${orderServiceUrl}/api/orders`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error forwarding request to Order Service" });
  }
});

// Route GET /orders/:orderId to the Order Service
router.get("/orders/:orderId", async (req, res) => {
  try {
    const response = await axios.get(
      `${orderServiceUrl}/api/orders/${req.params.orderId}`
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error forwarding request to Order Service" });
  }
});

// Route POST /payments to the Payment Service
router.post("/payments", async (req, res) => {
  try {
    const response = await axios.post(
      `${paymentServiceUrl}/api/payments`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error forwarding request to Payment Service" });
  }
});

module.exports = router;
