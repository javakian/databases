var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      db.connection.query('SELECT * FROM allMessages', function(err, rows, fields){
        if(err){
          throw err;
        }
        console.log(rows[0].username);
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

