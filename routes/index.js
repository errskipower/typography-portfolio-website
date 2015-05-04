var express  = require('express'),
    router   = express.Router()

// define the home page route
router.get('/', function(req, res) {
  res.render('index', {title: 'Web Developer', active: 'home'})
})

// define the portfolio page route
router.get('/portfolio', function(req, res) {
  res.render('portfolio', {title: 'Portfolio', active: 'portfolio'})
})

// define the about page route
router.get('/about', function(req, res) {
  res.render('about', {title: 'About', active: 'about'})
})

// define the resume page route
router.get('/resume', function(req, res) {
  res.render('resume', {title: 'Resume', active: 'resume'})
})

// define the contact page route
router.get('/contact', function(req, res) {
  res.render('contact', {title: 'Contact', active: 'contact'})
})

// define the services page route
router.get('/services', function(req, res) {
  res.render('services', {title: 'Services', active: 'services'})
})

module.exports = router