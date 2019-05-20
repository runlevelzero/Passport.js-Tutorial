var express = require('express');
var router = express.Router();
const fs = require('fs');
var mongodb = require('mongodb');
var uuid = require('uuid');


/* GET home page. */


router.post('/api/addtolist', (req, res, next) => {
  if('title' in req.body) {
    var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/tododb';

    MongoClient.connect(url, (err, client) => {
      newTodo = {
        id: uuid.v4(),
        title: req.body.title,
        completed: false
      };
      client.db('tododb').collection('list').insertOne(newTodo);
      console.log("sent");
      res.send(newTodo);
      res.end();
    });
  }
  else {
    res.end("ERROR! you have sent an improper request to this end");
    return;
  }
  next();
});

router.get('/api/getList', (req, res, next) => {
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/tododb';

  MongoClient.connect(url, (err, client) => {
    if(err) console.log(`[:<] ${err} `);
    else {
      console.log("connection successful");


      var collection = client.db('tododb').collection('list');

      collection.find({}).toArray( (err, result) =>{
        if(err) console.log(`[:<] ${err} `);
        else if(result){
          res.send(result);
          res.end();
        }
        else console.log("no data sent");
        //client.db('tododb').close();
      });
    }
  });
});



module.exports = router;
