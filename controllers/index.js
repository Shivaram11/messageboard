const Board = require("../models/Board");
// const Messages = require("../models/Messages");
module.exports={
    async getBoard(req,res,next){
        const board=await Board.findById(req.params.bid);
        console.log(board);
        res.render("message",{board});
        
    },
    async createBoard(req,res,next){
        let board = await Board.create(req.body);
    }


}