const express = require("express");
const pageRoutes = express.Router();

pageRoutes.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

pageRoutes.get("/multiplicar", (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);

  return res.json({ resultado: String(num1 * num2) });
});

module.exports = pageRoutes;
