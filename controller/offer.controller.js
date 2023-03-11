const AsyncHandler = require("express-async-handler");
const Offer = require("../model/offer.mongoose");

//@desc Create offer
//@route POST api/v1/offers/create
//@access Private
exports.createOfferCtrl = AsyncHandler(async(req,res)=>{
    const {cityOfDeparture,cityOfArrival, departureTime, citiesOfPassage} = req.body;
    const offer = await Offer.create({
        cityOfDeparture,
        cityOfArrival,
        citiesOfPassage,
        departureTime
    })
    res.status(201).json({
        status: "success",
        message: "Offer created succesfuly",
        data: offer,
        createdBy: req.userAuth._id
    })
})

//@desc get offers
//@route Get api/v1/offers
//@access Private
exports.getAllOfferCtrl = AsyncHandler(async(req,res)=>{
    const offers = await Offer.find();
    res.status(201).json({
        status: "success",
        message: "offers fetched succesfully",
        data: offers
    })
})

//@desc get offer by id
//@route Get api/v1/offers/:id
//@access Private
exports.getSingleOfferCtrl = AsyncHandler( async(req,res)=>{
    const offer = await Offer.findById(req.params.id);
    res.json({
        status: "success",
        message: "Offer fetched succesfully",
        data: offer,
    })
})
//@desc update offers 
//@route PUT api/v1/offers/:id
//@access Private
exports.updateOfferCtrl = AsyncHandler(async (req,res)=>{
    const {cityOfDeparture,cityOfArrival, departureTime} = req.body;
    const offer = await Offer.findByIdAndUpdate({

    })
})