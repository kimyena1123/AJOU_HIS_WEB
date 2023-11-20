const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

//기본주소: localhost:PORT

//GET / => localhost: PORT/
router.get('/', controller.main);
router.get('/subgreeting', controller.subgreeting);
router.get('/subpage', controller.subpage);
router.get('/department', controller.department);

module.exports = router;