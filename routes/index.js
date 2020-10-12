const express = require('express');
const router = express.Router();
const passport = require("passport");
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

const {
 
  createBoard,
  getCreate,
  logout,
  getProfile
} = require("../controllers/index");
// require("../config/passport")(passport);
/* GET home page. */
// router.get("/success",ensureLoggedIn("/auth/google"),(req,res,next)=>{
//   // if(req.isAuthenticated()){
//     res.send("hey")
//   // }
// //   else{
// //     // res.send("nooooooo");
// // res.redirect("/auth/google");
// //   }

// })
// router.get("/failure",ensureLoggedIn("/auth/google"), (req, res, next) => {
//   // if (req.isAuthenticated()) {
//   //   res.send("failure")
//   // } else {
//   //   // res.send("nooooooo");
//   //   res.redirect("/auth/google");
//   // }
//   res.send("failure");

// })


router.get('/',function(req, res, next) {
  res.render('index', { title: 'Express',req });
});
router.get("/create", ensureLoggedIn("/auth/google"), getCreate);
router.post("/create", ensureLoggedIn("/auth/google") ,createBoard);
router.get("/logout",ensureLoggedIn("/auth/google"),logout);
router.get("/profile",ensureLoggedIn("/auth/google"),getProfile)
router.get("/about",(req,res,next)=>{
  res.render("about",{req});
});
router.get("/contact",(req,res)=>{
res.render("contact",{req});
})

// router.get("/:bid",getBoard);

// router.get('/auth/google',
//   passport.authenticate('google', {
//     scope: ['profile']
//   }));
 
// router.get('/auth/google/callback',
//   passport.authenticate('google', {
//     failureRedirect: '/login'
//   }),
  // function (req, res) {
  //   // Successful authentication, redirect home.
  //   res.redirect('/');
  // });

module.exports = router;
