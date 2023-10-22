/** @format */

const paymentController = require("../Controller/paymentController");

module.exports = {
  processPayment: paymentController.processPayment,
  getPayment: paymentController.getPayment,
};
