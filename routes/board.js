const express = require('express');
const router = express.Router();
const {
    getBoard
}=require("../controllers/board");
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

// router.get("/add/:bid",addMessage)
router.get("/:bid",ensureLoggedIn('/auth/google'),getBoard);


module.exports= router;