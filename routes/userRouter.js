const express = require('express');
const { registerUserCtrl, loginUserCtrl, getAllUsersCtrl, getUserProfileCtrl, updateUserCtrl } = require('../controller/user.controller');
const isLogin = require('../middlewares/isLogin');

const userRouter = express.Router();

// Register User
userRouter.post("/register", registerUserCtrl);
// Log in User
userRouter.post("/login", loginUserCtrl);
// Get all users
userRouter.get('/',getAllUsersCtrl);
//get user profile
userRouter.get('/:id',isLogin, getUserProfileCtrl);
//update user profile
userRouter.put('/:id',isLogin, updateUserCtrl)
module.exports = userRouter;