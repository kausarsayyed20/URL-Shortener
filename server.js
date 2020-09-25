'use strict';

var express = require('express');
const connectDB=require('./DB/Connection');
var mongo = require('mongodb');
var mongoose = require('mongoose');

var cors = require('cors');



var app = express();
app.options('*', cors())
app.use(cors());
// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.DB_URI);


/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.listen(port, function () {
  console.log('Node.js listening ...');
});

connectDB();
let urlSchema=new mongoose.Schema({
  originalurl :{type :String,required:true},
  shorturl : Number
})


let Url=mongoose.model('Url',urlSchema)
let bodyParser=require('body-parser');
let responseObject={}

app.post('/api/shorturl/new', bodyParser.urlencoded({ extended: false }) , (request, response) => {
console.log("hello");
  response.json(responseObject)
})
