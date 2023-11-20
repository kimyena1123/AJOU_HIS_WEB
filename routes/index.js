const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

//기본주소: localhost:PORT

//GET / => localhost: PORT/
router.get('/', controller.main);
router.get('/subgreeting', controller.subgreeting);
router.get('/subpage', controller.subpage);

router.get('/student', controller.student);

router.get('/department', controller.department);
router.get('/his_intro', controller.his_intro);
router.get('/road', controller.road);
router.get('/eduTarget', controller.eduTarget);
router.get('/club', controller.club);

module.exports = router;