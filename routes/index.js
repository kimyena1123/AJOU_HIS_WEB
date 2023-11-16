const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

//기본주소: localhost:PORT

//GET / => localhost: PORT/
router.get('/', controller.main);

module.exports = router;