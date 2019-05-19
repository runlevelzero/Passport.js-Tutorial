var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/addtolist', (req, res, next) => {
  if('title' in req.body) addToFile(req.body.title);
  else {
    res.end("ERROR! you have sent an improper request to this end");
    return;
  }
  next();
});

router.get('/api/getList', (req, res, next) => {
  fs.readFile('../list.json', (err, data) => {
    if(err) throw err;
    else {
      list = JSON.parse(data);
    }
  });
});



module.exports = router;
