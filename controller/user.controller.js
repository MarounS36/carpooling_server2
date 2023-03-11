const AsyncHandler = require("express-async-handler");
const User = require("../model/user.mongoose");
const generateToken = require("../utils/generateToken");
const { hashPassword, isPassMatched } = require("../utils/helpers");
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
            password: await hashPassword(password),
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
    const isMatched = await isPassMatched(password, user.password);
    if(!isMatched){
        return res.json({
            message: "Invalid login credentials"
        })
    }else{
        return res.json({
            data: generateToken(user._id),
            message: "User logged in succesfully",
            
        })
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
//@route POST api/v1/users/:id
//@access Private
exports.getUserProfileCtrl = AsyncHandler(async(req,res)=>{
    const user =await User.findById(req.userAuth._id).select("-password -createdAt ");
    
    if(!user){
        throw new Error('Admin not found');
    }else{
        res.status(200).json({
            status:'success',
            data: user,
            message: "User profile fetched succesfuly"
        })
    }
})
//@desc Update user
//@route PUT api/users/:id
//@access Private
exports.updateUserCtrl = AsyncHandler( async(req,res)=>{
    const {email, name, password,firstName, phoneNumber, gender} = req.body;
   
    //if email is taken
    const emailExist = await User.findOne({email})
    if(emailExist){
        throw new Error('This email is taken/exist');
    }
   
    //check if user is updating password
    if(password){
        //update
        const user = await User.findByIdAndUpdate(req.userAuth._id,{
            name,
            firstName,
            email,
            password: await hashPassword(password),
            phoneNumber,
            gender
        },{
            new: true,
            runValidators: true,
        })
    res.status(200).json({
        status: "success",
        data: user,
        message: "User updated succesfully"
    })
    
    }else{
        //update
        const user = await User.findByIdAndUpdate(req.userAuth._id,{
            name,
            firstName,
            email,
            phoneNumber,
            gender
        },{
            new: true,
            runValidators: true,
        })
    res.status(200).json({
        status: "success",
        data: user,
        message: "User updated succesfully"
    })
    
    }

        
})