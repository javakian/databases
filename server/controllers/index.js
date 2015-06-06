// var models = require('../models');
var bluebird = require('bluebird');
// var urlParser = require('url');
var db = require('../db');
// var getAsync = bluebird.promisifyAll(models.messages.get);


module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.findAll({include: [db.User]})
        .complete(function(err, data){
          console.log('called Message');
          if(err){
            throw err;
          }
          res.json(data);
        });


  //mysql version
      // console.log('called');
      // models.messages.get(function(data){
      //   // if(err) throw err;
      //   res.send(data);

      // })
      // getAsync.call(models.messages.get).then(res.send(models.messages.stuff));
    },
     // a function which handles a get request for all messages
    post: function (req, res) {
    //create a new message entry in Messages table
    //pass in parameteres from user data (req.body)
    //check to see if a user exists,
      //if it does, refer to id,
      //else, create the new user/id
    //send response to user(status)
    db.User.findOrCreate({where: {username: req.body[username]}})
      .complete(function(err, results){
        if(err) throw err;
        var params = {
          text: req.body[text],
          userid: results[0].dataValues.id,
          roomname: req.body[roomname]
        }
        db.Message.create(params)
          .complete(function(err, results){
            if(err){
              throw err;
            }
            res.status(201);
          })
        });



  //mysql version
      // module.exports.messages.collectData(req, res, function(data){
      //   models.messages.post(data);
    }  // });
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      db.User.findAll().complete(function(err, data){
        if(err){
          throw err;
        }
        res.json(data);
      });
    },
    post: function (req, res) {
      db.User.create({username: req.body[username]})
        .complete(function(err,results){
          if(err) throw err;
          res.status(201);
        })
      }
  }

  // dataObject: {
  //   results: []
  // },


};
