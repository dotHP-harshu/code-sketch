const express = require("express");
const apiRoutes = require("./routers/api.routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});
app.use("/api", apiRoutes);

module.exports = app;
