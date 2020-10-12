// const { populate } = require("../models/board");
const Board = require("../models/boardes");
const Message = require("../models/messagees");

module.exports = {
    async messageCreate(req,res,next){
        let board = await Board.findById(req.params.bid).populate("messages").exec();
        let hasReviewed = board.messages.filter((message)=>{
            return message.user.equals(req.user.id);
        }).length;
        if(hasReviewed){
            return res.send("can only send one message wonec");

        }
        console.log(board.messages.name);
        req.body.user=req.user.id;
        let message = await Message.create(req.body);
        board.messages.push(message);
        // console.log(board);
        board.save();
        // res.redirect("/");
        res.redirect(`/board/${req.params.bid}`);


    },
    async messageEdit(req, res, next) {
        console.log(req.params.mid);
        // let use=await Message.findById(req.params.mid);
        let message = await Message.findById(req.params.mid);

        if(req.user.id==message.user){ 
         await Message.findByIdAndUpdate(req.params.mid,req.body);
        res.redirect(`/board/${req.params.bid}`);
    }
        else{
            res.send("ya dont belong here bruh")
        }
        
        
    },
    async messageDelete(req, res, next) {
        let message = await Message.findById(req.params.mid);
                        if(req.user.id==message.user){ 

        await Board.findByIdAndUpdate(req.params.bid,{
            $pull:{messages:req.params.mid}
        });
        await Message.findByIdAndDelete(req.params.mid);
        res.redirect(`/board/${req.params.bid}`);}
        else{
            res.send("get outta here");
        }

    }
}
