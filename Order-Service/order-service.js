/** @format */

const express = require("express");
const app = express();
const port = 3000;
const orderRoutes = require("./Router/orderRoutes");

app.use(express.json());
app.use("/api", orderRoutes);

app.listen(port, () => {
  console.log("Order Service is running on port " + port);
});
