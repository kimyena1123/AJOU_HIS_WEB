const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// /user/signin
router.get('/signin', controller.getSignin); //localhost:PORT/user

module.exports = router;