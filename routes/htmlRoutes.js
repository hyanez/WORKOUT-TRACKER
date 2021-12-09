const routes = require("express").Router();
const path = require("path");

routes.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "../public/index.html"));
});
