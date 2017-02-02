var express = require('express');
var app = express();
var fs = require('fs');
// app.enable('view cache'); // To enable handlebars view caching
//process.env.NODE_ENV = "production"; // Enables view caching
// process.env.NODE_ENV = "dev"; // Disables view caching
//-----------------------------------------------------------------------------
// Handlebars
// https://github.com/ericf/express-handlebars
//-----------------------------------------------------------------------------
var exphbs  = require('express-handlebars');
var hbs = exphbs.create({
  defaultLayout: 'main',
  });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//-----------------------------------------------------------------------------
// Routes
//-----------------------------------------------------------------------------
app.get('/', function (req, res) {
    res.render('home', {});
});

app.get('/about', function (req, res) {
    res.render('about', {});
});

app.get('/nature', function (req, res) {
    res.render('nature', {});
});

app.get('/travel', function (req, res) {
    res.render('travel', {});
});

app.get('/other', function (req, res) {
    res.render('other', {});
});

//-----------------------------------------------------------------------------
// Static Files
//-----------------------------------------------------------------------------
app.use(express.static('public'));

//-----------------------------------------------------------------------------
// Listen
//-----------------------------------------------------------------------------
app.listen(3000);
