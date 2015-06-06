var db = require('../db');




module.exports = {
  messages: {

    stuff: {
      results:[]
    },

    get: function (callback) {
      console.log('got to query');
      db.connection.query('SELECT * FROM allMessages', function(err, rows, fields){
        if(err){
          console.log('this is an error');
          throw err;
        }
        callback(rows);
        console.log("rows: " + JSON.stringify(rows));
        console.log(messages.stuff);
        // data.results.push(JSON.stringify(rows));
      });
    },
       // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

