/** @format */

const Payment = require("../Model/payment");

// In-memory payment storage
const payments = [];

// Process a payment
function processPayment(req, res) {
  const { orderId, amount } = req.body;
  // In a real-world scenario, you'd likely have more complex payment processing logic.
  const paymentId = payments.length + 1;
  const payment = new Payment(paymentId, orderId, amount);
  payments.push(payment);
  res.json(payment);
}

// Retrieve payment details by payment ID
function getPayment(req, res) {
  const paymentId = parseInt(req.params.paymentId);
  const payment = payments.find((p) => p.paymentId === paymentId);
  if (payment) {
    res.json(payment);
  } else {
    res.status(404).json({ error: "Payment not found" });
  }
}

module.exports = { processPayment, getPayment };
