const express = require("express");
const {createUser} = require("../controllers/UserController")

const userRouter = express.Router()

userRouter.route("/").post(createUser);
userRouter.route("/").get();
userRouter.route("/").get();
userRouter.route("/").put();
userRouter.route("/").delete();

module.exports = userRouter;
