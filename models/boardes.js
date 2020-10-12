const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    title:String,
    description:String,
    creator:{
        type:Schema.Types.ObjectId,
        ref:'User'

    },
    messages:[ {
        type:Schema.Types.ObjectId,
        ref:'Message'
    }]

});
module.exports = mongoose.model('Board', BoardSchema);
