var db = require('../db');




module.exports = {
  messages: {

    stuff: {},

    get: function (callback) {
      // console.log('got to query');
      db.connection.query('SELECT * FROM allMessages', function(err, rows, fields){
        if(err){
          // console.log('this is an error');
          throw err;
        }
        module.exports.messages.stuff.results = rows;
        callback(JSON.stringify(module.exports.messages.stuff));
        // console.log("rows: " + JSON.stringify(rows));
        // console.log(messages.stuff);
        // data.results.push(JSON.stringify(rows));
      });
    },
       // a function which produces all the messages
     // a function which can be used to insert a message into the database
    post: function (data) {
      var messageObj = JSON.parse(data);
      var insertDatabase = 'INSERT INTO allMessages SET ?';
        db.connection.query(insertDatabase, messageObj, function(err, rows){
        if(err){
          throw err;
        }
        console.log(JSON.stringify(rows));
      })
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

