const express = require("express");
const userController = require("../controllers/UserController");
const userRouter = express.Router();

userRouter.post("/create", userController.registerUser);
userRouter.post("/", userController.authorizeUser);

module.exports = userRouter;