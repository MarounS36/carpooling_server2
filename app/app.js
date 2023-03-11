const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const { globalErrHandler, notFoundErr } = require('../middlewares/globalErrHandler');
const userRouter = require('../routes/userRouter');
const offerRouter = require('../routes/offer.router');
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/offers", offerRouter);

//Error Middleware
app.use(notFoundErr);
app.use(globalErrHandler);

module.exports = app;