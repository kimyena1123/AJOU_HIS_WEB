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

exports.department = (req, res) => {
    res.render('department');
}

exports.club = (req, res) => {
    res.render('club');
}

exports.his_intro = (req, res) => {
    res.render('his_intro');
}

exports.road = (req, res) => {
    res.render('road');
}

exports.eduTarget = (req, res) => {
    res.render('eduTarget');
}