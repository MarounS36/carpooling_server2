const express = require("express");
const { createOfferCtrl, getAllOfferCtrl, getSingleOfferCtrl, updateOfferCtrl } = require("../controller/offer.controller");

const offerRouter = express.Router();

//Create Offer
offerRouter.post("/create", createOfferCtrl);
//get offers
offerRouter.get("/", getAllOfferCtrl);
//get single offer
offerRouter.get("/:id", getSingleOfferCtrl);
//update Offer
offerRouter.put(":/id", updateOfferCtrl);
module.exports = offerRouter;