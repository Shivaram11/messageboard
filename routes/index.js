const express = require('express');
const router = express.Router();
const { getBoard, createBoard } = require("../controllers/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/:bid",getBoard);
router.post("/create", createBoard);

module.exports = router;
