const mongoose = require("mongoose");

const {Schema} = mongoose;

const offerSchema = new Schema({
    cityOfDeparture:{
        type: String,
        required: true
    },
    cityOfArrival:{
        type: String,
        required: true
    },
    citiesOfPassage:{
        type: String,
        required: true
    },
    departureTime:{
        type: Date,
        required: true
    },
})
const offer = mongoose.model("Offer", offerSchema);
modules.export = offer;