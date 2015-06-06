var models = require('../models');
var bluebird = require('bluebird');
var urlParser = require('url');
var getAsync = bluebird.promisifyAll(models.messages.get);


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('called');
      getAsync.call(models.messages.get).then(res.send('something'));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // collectData(req, function(data){
      //   console.log(data);
      // });
      // console.log(dataObject);
      res.send('work');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }

  // dataObject: {
  //   results: []
  // },

//   collectData: function(req, callback) {
//     var data = '';

//     req.on('data', function(chunk){
//       data += chunk;
//     });
//     req.on('end', function(){
//       console.log(data);
//       callback(data);
//     });
//   }
};
