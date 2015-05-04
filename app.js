/*
 * Module dependencies
 */
var express   = require('express'),
    jade      = require('jade'),
    stylus    = require('stylus'),
    normalize = require('normalize'),
    routes    = require('./routes')

// set up express app
var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .include(normalize.path)
}

// set default node environment variables to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// use Jade and get views from '/views' directory
app.set('views', __dirname + '/views')
app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'jade')

// middleware to compile .styl files to CSS
app.use(stylus.middleware(
  { src: __dirname + '/public',
    compile: compile
  }
))

// static files in '/public' directory
app.use(express.static(__dirname + '/public'))
app.use('/public/scripts', express.static(__dirname + '/public/scripts'))

// run!
app.use('/', routes)

app.listen(app.get('port'), function() {
  console.log("Portfolio is running on:" + app.get('port'))
})
