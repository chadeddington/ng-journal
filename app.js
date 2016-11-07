var express       = require('express'),
    bodyParser    = require('body-parser'),
    ejs           = require('ejs'),
    app           = express(),
    users         = require('./middleware/usersLogic'),
    loginHandler  = require('./handlers/login');

// App Setup
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
// location for templates
app.use(express.static(__dirname + "/views"));
// location for assets
app.use(express.static(__dirname + "/public"));

// Routes
app.get('/', function(req, res) {
  res.render('index');
});

app.post('/user-login', users.login);
app.post('/user-register', users.register);

// Start server
var PORT = 8080;
var server = app.listen(PORT, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});