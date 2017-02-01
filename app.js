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
app.get('/home', function (req, res) {
    res.render('home', {});
});

app.get('/gallery', function (req, res) {
    res.render('gallery', {});
});

//-----------------------------------------------------------------------------
// Static Files
//-----------------------------------------------------------------------------
app.use(express.static('public'));

//-----------------------------------------------------------------------------
// Listen
//-----------------------------------------------------------------------------
app.listen(3000);
