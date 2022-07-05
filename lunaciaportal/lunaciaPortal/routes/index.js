var express = require('express');
var router = express.Router();
const lunaciaController = require("../controllers/lunaciaController");


/* GET home page. */
router.get('/', lunaciaController.index);

module.exports = router;
