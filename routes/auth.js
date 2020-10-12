const express = require('express');
const router = express.Router();
const passport = require("passport");


router.get("/google",passport.authenticate('google',{
   scope: ['profile']

   
}),(req,res)=>{
        //    console.log("hey",req.query);

});

router.get('/google/callback',passport.authenticate('google'),
(req,res)=>{
    // console.log("callback working hey");
    // res.send("for what its worth");
    // console.log(req.query['returnTo']);
    console.log(req.session.returnTo);
    if(req.session.returnTo){
        res.redirect(req.session.returnTo);
    }else{
        res.redirect("/")
    }
}
)
router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
})

module.exports=router;