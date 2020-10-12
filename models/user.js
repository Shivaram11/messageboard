const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-find-or-create');

const mongoose= require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    googleId: {
        type:String
        // required:true
    },
    displayName: {
        type: String
        // required: true
    },
    firstName:{
        type:String
        // required:true
    },
    lastName:{
        type:String
        // required:true
    },
    boards:[ {
        type:Schema.Types.ObjectId,
        ref:'Board'
    }]
});
UserSchema.plugin(findOrCreate)
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema); 