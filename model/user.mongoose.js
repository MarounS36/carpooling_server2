const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true,
    }
})
//Hash password
//Hash password
userSchema.pre('save',async function(next){
    if(this.isModified(this.password)){
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
  });
  //verifyPassword
  userSchema.methods.verifyPassword = async function(password) {
    const user = this;
    const match = await bcrypt.compare(password, user.password);
    return match;
  };
const User = mongoose.model("User", userSchema);
module.exports = User;