var express = require('express');
var http = require('http');
var orientdb = require('node-orientdb-http');
var app = express();

var db = orientdb.connect({
    host: "http://localhost:2480",
    user: "admin",
    password: "admin",
    database: "Roomies"
});


db.on('connect', function() {
    console.log('Connected to db');
});

db.on('error', function(err) {
    console.log('unable to connected to db');
});


app.get('/messages', function(req, res) {
  db.query('select * from Message order by publish_date_time desc', 50, '*:-1')
    .then (function (data) {
              res.json(data.result);
           },
           function (data) {
             res.send('error: ' + data);
           });
});

app.listen(80);