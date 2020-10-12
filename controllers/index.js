const Board = require("../models/board");
const User = require("../models/User");
// const Messages = require("../models/Messages");
module.exports={
  
    async createBoard(req,res,next){
        // if(req.isAutheticated){
            
            let board = await Board.create(req.body);
            let user = await User.findByIdAndUpdate(req.user.id,{
                $push:{
                    "boards":board.id
                }

            })
            
            // console.log(board);
            res.redirect(`/board/${board.id}`);
        // }else{

        //     res.redirect("/auth/google");
        // }
        
    },
    getCreate(req,res,next){
    //     if (req.isAutheticated) {
            
    //         res.render("create",{});
    //     }else{
    //         res.redirect("/auth/google");
    // }
                res.render("create", {req});

},
logout(req,res){
    req.logout();
    res.redirect("/");
},
async getProfile(req,res,next){
    let user = await User.findById(req.user.id).populate("boards").exec();
    res.render("profile",{req,user});

}


};