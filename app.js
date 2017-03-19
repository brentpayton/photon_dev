// jshint asi:true, esversion:6
process.chdir('/usr/share/nginx/html/dev.photon/');
const port = 3001;
var fs = require('fs');
//var http = require('http');
var spdy = require('spdy');
////var https = require('https');
var privatekey = fs.readFileSync('/etc/letsencrypt/live/www1.brentpayton.com/privkey.pem');
var certificate = fs.readFileSync('/etc/letsencrypt/live/www1.brentpayton.com/fullchain.pem');
var credentials = {key: privatekey, cert: certificate};
var express = require('express');
var app = express();

// ----------------------------------------------------------------------------
// SPDY
// ----------------------------------------------------------------------------
var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/www1.brentpayton.com/privkey.pem'),
    cert:  fs.readFileSync('/etc/letsencrypt/live/www1.brentpayton.com/fullchain.pem')
};

spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error);
      return process.exit(1);
    } else {
      console.log('Listening on port: ' + port + '.');
    }
  });

app.enable('view cache'); // To enable handlebars view caching
// process.env.NODE_ENV = "production"; // Enables view caching
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
var oneMonth = 86400000 * 30;// 86400000 milliseconds is one day;

// app.use(express.static('public'));
app.use(express.static('public', { maxAge: oneMonth }));

//-----------------------------------------------------------------------------
// Listen
//-----------------------------------------------------------------------------
//app.listen(3000);
//var httpServer = http.createServer(app);
////var httpsServer = https.createServer(credentials, app);
//httpServer.listen(3000);
////httpsServer.listen(3001);
////console.log('dev.photon-art.com in', app.get('env'), 'mode');

console.log('dev.photon-art.com in', app.get('env'), 'mode');
