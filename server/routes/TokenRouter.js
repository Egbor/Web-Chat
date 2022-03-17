const express = require("express");
const tokenController = require("../controllers/TokenController");
const tokenRouter = express.Router();

tokenRouter.post("/", tokenController.getToken);

module.exports = tokenRouter;