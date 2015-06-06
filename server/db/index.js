// var mysql = require('mysql');
var Sequelizer = require('sequelize');

var orm = new Sequelizer('chat', 'root', '');

exports.User = User = orm.define('User', {
  username: Sequelizer.STRING
});

exports.Message = Message = orm.define('Message', {
  text: Sequelizer.STRING,
  roomname: Sequelizer.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
User.sync();
Message.sync();


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat"
// exports.connection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'chat'
// });


