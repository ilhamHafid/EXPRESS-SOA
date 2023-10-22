/** @format */

const express = require("express");
const app = express();
const port = 4000;
const apiGatewayRoutes = require("./Router/apiGatewayRoutes");

app.use(express.json());
app.use("/api", apiGatewayRoutes);

app.listen(port, () => {
  console.log("API Gateway is running on port " + port);
});
