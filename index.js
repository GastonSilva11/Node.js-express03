const express = require("express");
const app = express();
const pageRoutes = require("./page-routes");

app.use(pageRoutes);

app.listen(8000, () => console.log("Listening on http:/localhost:8000"));
