const mongoose = require('mongoose');
const driver = require('./driver.mongoose');
const {Schema} = mongoose;

const carPoolingServiceSchema = new Schema({
    pricePerKm:{
        type: float,
        required: true,
    },
    websiteFee:{
        type: float,
        required: true,
    },
    driver:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Driver",
        },
    ],
    user:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],

})

const CarPoolingService = mongoose.model("CarPoolingService", carPoolingServiceSchema);
module.exports = CarPoolingService;