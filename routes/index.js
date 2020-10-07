/*
	Filename: index.js
	Name: Jagjit Singh
	Student ID: 
	Date: 2020-09-29
*/

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var global_data={
        "page_title":"Jagjit Singh - Web Developer"
    };
    res.render('pages/index',{global_data:global_data});
});

router.get('/services', function(req, res) {
    var global_data={
        "page_title":"Jagjit Singh - Services"
    };
    res.render('pages/services',{global_data:global_data});
});

router.get('/projects', function(req, res) {
    var global_data={
        "page_title":"Jagjit Singh - Projects"
    };
    res.render('pages/projects',{global_data:global_data});
});

router.get('/aboutme', function(req, res) {
    var global_data={
        "page_title":"Jagjit Singh - About Me"
    };
    res.render('pages/aboutme',{global_data:global_data});
});

router.get('/contact', function(req, res) {
    var global_data={
        "page_title":"Jagjit Singh - Contact"
    };
    res.render('pages/contact',{global_data:global_data});
});

module.exports = router;