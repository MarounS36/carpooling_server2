const fs = require('fs');
const https = require('https');
const helmet = require('helmet');
const path = require('path');
const express = require('express');
const passport = require('passport');
const {Strategy} = require('passport-google-oauth20');
const expressSession = require('express-session');

require('dotenv').config();

const config = {
    CLIENT_ID : process.env.CLIENT_ID,
    CLIENT_SECRET : process.env.CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2
 }
 
 const authOptions = {
    callbackURL:'/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
}