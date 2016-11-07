var LoginHandler = function() {};

LoginHandler.prototype.signin = function(req, res) {
  console.log('LoginHandler.signin Works!');
  res.render('index');
}

module.exports = new LoginHandler();