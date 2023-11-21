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
router.get('/eduprocess', controller.eduprocess);
router.get('/professorInro', controller.professorInro);
router.get('/honorPro', controller.honorPro);
router.get('/notice', controller.notice);
router.get('/detail', controller.detail);

router.get('/pro1', controller.pro1);
router.get('/pro2', controller.pro2);
router.get('/pro3', controller.pro3);
router.get('/pro4', controller.pro4);
router.get('/pro5', controller.pro5);
router.get('/pro6', controller.pro6);
router.get('/pro7', controller.pro7);


module.exports = router;