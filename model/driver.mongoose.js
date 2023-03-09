const mongoose = require('mongoose');
const {Schema} = mongoose;
const driverSchema = new Schema({
    age:{
        type: Number,
        required: true,
    },
    vehicleType:{
        type: String,
        required: true,
    },
    registrationNumber:{
      type: Number,
      required: true,    
    },
    user:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

    ]
})
const driver = mongoose.model('Driver',driverSchema);
module.exports = driver;