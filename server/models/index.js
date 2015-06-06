var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      console.log('got to query');
      db.connection.query('SELECT * FROM allMessages', function(err, rows, fields){
        if(err){
          console.log('this is an error');
          throw err;
        }
        return rows;
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

