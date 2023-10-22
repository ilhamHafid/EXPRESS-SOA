/** @format */

const Order = require("../Model/order");

// In-memory order storage
const orders = [];

// Create a new order
function createOrder(req, res) {
  const { customerName, totalAmount } = req.body;
  const orderId = orders.length + 1;
  const order = new Order(orderId, customerName, totalAmount);
  orders.push(order);
  res.json(order);
}

// Retrieve order details by order ID
function getOrder(req, res) {
  const orderId = parseInt(req.params.orderId);
  const order = orders.find((o) => o.orderId === orderId);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ error: "Order not found" });
  }
}

module.exports = { createOrder, getOrder };
