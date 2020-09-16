const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    title:String,
    description:String,
    messages:[ {
        type:Schema.Types.ObjectId,
        ref:'Messages'
    }]

});
module.exports = mongoose.model('Board', BoardSchema);
