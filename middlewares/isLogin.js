const User = require("../model/user.mongoose");
const verifyToken = require("../utils/verifyToken");

const isLogin = async (req,res,next)=>{
    //get token from header
    const headerObj = req.headers;
    const token = headerObj?.authorization?.split(" ")[1];
    // const token = headerObj && headerObj.authorization && headerObj.authorization.split(" ")[1];
    //verify token
    const verifiedToken = verifyToken(token);
    if(verifiedToken){
        //find the admin
        const user = await User.findById(verifiedToken.id).select("name firstName email gender ")
        //save the user into req.object
        req.userAuth = user;    
        next();
    }else{
        const err = new Error("Token expired/invalid");
        next(err);
    }
    
}
module.exports = isLogin; 