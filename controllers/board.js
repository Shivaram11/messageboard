const Board = require("../models/board");

module.exports= { 
    async getBoard(req, res, next) {
      const board = await Board.findById(req.params.bid).populate("messages").exec();
      // console.log(board);
      
      // res.send("hey");
    //   res.render("message", {
    //       board
    //   });
        let hasReviewed = board.messages.filter((message)=>{
            return message.user.equals(req.user.id);
        }).length;
       
    res.render("board",{req,board,hasReviewed})

  }
};