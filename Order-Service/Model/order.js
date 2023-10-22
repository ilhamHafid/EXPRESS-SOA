/** @format */

class Order {
  constructor(orderId, customerName, totalAmount) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.totalAmount = totalAmount;
    this.status = "Pending";
  }
}

module.exports = Order;
