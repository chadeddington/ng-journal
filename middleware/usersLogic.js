// Pull in the database connection
var connection = require('../services/db').connection;

exports.login = function(req, res, next) {
  connection.execute(
  	'SELECT * FROM User WHERE username = ? AND password = ?', [req.body.username, req.body.password], function(err, results, fields) {
    if (err) {
    	console.log('err: ', err);
  		res.send({'success': false});
  	} else {
  		if (results.length > 0) {
  			res.send({'success': true});
  		} else {
  			res.send({'success': false});
  		}
  	}
  });
};

exports.register = function(req, res, next) {
	connection.execute(
		'INSERT INTO User (username, email, password)' +
		'VALUES (?,?,?)', [req.body.username, req.body.email, req.body.password], function(err, results, fields) {
	 	if (err) {
	 		res.send({'success': false});
	 	} else {
	 		res.send({'success': true});
	 	}
 });
};