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

const User = mongoose.model("User", userSchema);
module.exports = User;