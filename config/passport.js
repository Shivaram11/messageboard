//use jshint es6
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose=require("mongoose");
const User = require("../models/User");
const passport = require("passport");

// console.log(passport);
    passport.use(new GoogleStrategy({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        },
        async function (accessToken, refreshToken, profile, cb) {
        //    console.log(profile);
            const newUser ={
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName
            }
            // User.getIndexes();
            // console.log(newUser)
            try {
                const user =await User.findOne({googleId:profile.id});
                if(user){
                    cb(null,user);
                }else{
                    const nwUser = await User.create(newUser);
                    cb(null, nwUser);
                     // cb(null,user);
                }
                
            } catch (error) {
                console.log(error);
            } 
        
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
