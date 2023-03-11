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
        required: false
    },
    departureTime:{
        type: Date,
        required: true
    },
    pricePerKm:{
        type: Number,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver",
        required: true,
      },
})
const Offer = mongoose.model("Offer", offerSchema);
module.exports = Offer;