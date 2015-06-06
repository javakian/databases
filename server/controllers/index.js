var models = require('../models');
var bluebird = require('bluebird');
var urlParser = require('url');
// var getAsync = bluebird.promisifyAll(models.messages.get);


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('called');
      models.messages.get(function(data){
        // if(err) throw err;
        res.send(data);

      })
      // getAsync.call(models.messages.get).then(res.send(models.messages.stuff));
    },
     // a function which handles a get request for all messages
    post: function (req, res) {
      module.exports.messages.collectData(req, res, function(data){
        models.messages.post(data);
      });
    },

    collectData: function(req, res, callback) {
      var data = '';

      req.on('data', function(chunk){
        data += chunk;
      });
      req.on('end', function(){
        // console.log(data);
        callback(data);
        res.send('success');
      });
    }
      // });
      // console.log(dataObject);
      // res.send('work');
     // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }

  // dataObject: {
  //   results: []
  // },


};
