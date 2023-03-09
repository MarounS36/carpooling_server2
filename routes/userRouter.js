const express = require('express');
const { registerUserCtrl, loginUserCtrl, getAllUsersCtrl, getUserProfileCtrl } = require('../controller/user.controller');
const isLogin = require('../middlewares/isLogin');

const userRouter = express.Router();

// Register User
userRouter.post("/users/register", registerUserCtrl);
// Log in User
userRouter.post("/users/login", loginUserCtrl);
// Get all users
userRouter.get('/users',getAllUsersCtrl);
//get user profile
userRouter.get('/users/profile',isLogin, getUserProfileCtrl);
//update user profile
userRouter.put('/users/profile')
module.exports = userRouter;