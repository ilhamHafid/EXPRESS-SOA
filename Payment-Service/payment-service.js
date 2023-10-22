/** @format */

const express = require("express");
const app = express();
const port = 3001;
const paymentRoutes = require("./Router/paymentRoutes");

app.use(express.json());
app.use("/api", paymentRoutes);

app.listen(port, () => {
  console.log("Payment Service is running on port " + port);
});
