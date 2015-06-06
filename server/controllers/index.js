var models = require('../models');
var bluebird = require('bluebird');
var urlParser = require('url');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log('called');
      var parts = urlParser.parse(req.url);
      var path = parts.pathname;
      bluebird.promisy(models.messages.get(req, res)).then(res.send(path, function(){
        console.log('something');
      }));

      // var promise = function(path){
      //   return new Promise(function())
      // }
      // models.messages.get(req, res).then
      console.log(models.messages.get(req, res));
      // res.send('200', function(){ consolmodels.messages.get(req, res)); });
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
