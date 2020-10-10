
var express = require('express');
var ejs = require('ejs');
var router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', function (req, res, next) {
    res.render('pages/index', { title: 'Rosaly Mendez' });
});


router.get('/about', function (req, res, next) {
    res.render('pages/about', { title: 'About Me' });
});


router.get('/projects', function (req, res, next) {
    res.render('pages/projects', { title: 'Projects' });
});


router.get('/services', function (req, res, next) {
    res.render('pages/services', { title: 'Services' });
});


router.get('/contact', function (req, res, next) {
    res.render('pages/contact', { title: 'Contact' });
});



module.exports = router;
