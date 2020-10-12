const express = require('express');
const router = express.Router({
    mergeParams: true
});
    const passport = require("passport");
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
const {
    messageCreate,
    messageEdit,
    messageDelete

} = require("../controllers/message")

router.post("/", ensureLoggedIn("/auth/google"), messageCreate);
router.put("/:mid",ensureLoggedIn("/auth/google"), messageEdit);
router.delete("/:mid",ensureLoggedIn("/auth/google"),messageDelete);

module.exports=router;                                                                                                                                                     