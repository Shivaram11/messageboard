const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema=new Schema({
    name:String,
    message:String,
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
});
module.exports=mongoose.model('Message',MessageSchema);