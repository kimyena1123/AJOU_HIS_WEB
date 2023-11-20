const models = require('../models/index');

exports.main = (req, res) => {
    res.render('main');
}

exports.subgreeting = (req, res) => {
    res.render('subgreeting');
}

exports.subpage = (req, res) => {
    res.render('subpage');
}

exports.student = (req, res) => {
    res.render('student');
}