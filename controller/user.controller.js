const AsyncHandler = require("express-async-handler");
const User = require("../model/user.mongoose");
const generateToken = require("../utils/generateToken");
const verifyToken = require("../utils/verifyToken");

//@desc Register User
//@route POST api/v1/users/register
//@access Private
exports.registerUserCtrl = AsyncHandler(async(req,res)=>{
    const {name,email,password,firstName,gender,phoneNumber} = req.body;
        const userFound = await User.findOne({email});
        if(userFound){
            res.json("User Exists");
        }else{
        const user = await User.create({
            name,
            firstName,
            email,
            password,
            phoneNumber,
            gender
        })
        res.status(201).json({
            status: "success",
            data: user,
        })}
})

//@desc login User
//@route POST api/v1/users/login
//@access Private
exports.loginUserCtrl = AsyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    //find user
    const user  = await User.findOne({email});
    if(!user){
        return res.json({
            message: "User not found"
        })
    }
    if(user && user.verifyPassword(password)){
        const token = generateToken(user._id);
        const verify = verifyToken(token);
        console.log(verify);
        return res.json({
            data: generateToken(user._id),user,verify})
    }else{
        return res.json({message:"Invalid Login credentials"})
    }
})

//@desc get All Users
//@route POST api/v1/users
//@access Private
exports.getAllUsersCtrl = AsyncHandler(async(req,res)=>{
    const users = await User.find();
    res.status(200).json({
        status: "success",
        message: "Admins fetched succesfully",
        data: users
    })
})
//@desc get User Profile
//@route POST api/v1/users/profile
//@access Private
exports.getUserProfileCtrl = AsyncHandler(async(req,res)=>{
    console.log(req.userAuth)
    const user =await User.findById(req.userAuth._id).select("-password -createdAt ");
    
    if(!user){
        throw new Error('Admin not found');
    }else{
        res.status(200).json({
            status:'success',
            data: user,
            message: "Admin logged in succesfuly"
        })
    }
})
