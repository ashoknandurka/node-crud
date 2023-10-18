const express = require("express");
const {
    createUser,
    findAllUsers,
    findUserById,
    updateUser,
    deleteUserById
   } = require("../controllers/UserController")

const userRouter = express.Router()

userRouter.route("/").post(createUser);
userRouter.route("/").get(findAllUsers);
userRouter.route("/:id").get(findUserById);
userRouter.route("/:id").put(updateUser);
userRouter.route("/:id").delete(deleteUserById);

module.exports = userRouter;
