/** @format */

class Payment {
  constructor(paymentId, orderId, amount, status) {
    this.paymentId = paymentId;
    this.orderId = orderId;
    this.amount = amount;
    this.status = status || "Pending";
  }
}

module.exports = Payment;
