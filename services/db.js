var mysql = require('mysql2');
var connection = mysql.createConnection({host:'localhost', user: 'admin', database: 'test'});

exports.connection = connection;
