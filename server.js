// Basic app setup
var express = require('express');
var app = express();

// creating global variables to be used
var port = process.env.PORT || 3000;

// configuring our middlware
app.use(express.static('views'));
app.set('view engine', 'ejs');

// defining our routes
app.get('/', function(req, res){
  res.render('index');
});

// setting up our 404 error
app.use(function(err, req, res, next) {
  //console.error(err.stack);
  res.render('404');
});

app.listen(port, function(){
  console.log('server started and listening on port ', port);
});
