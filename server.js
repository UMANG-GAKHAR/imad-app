var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var Crypto = require('Crypto');
var config ={
    user:'umangakhar29',
    database:'umangakhar29',
    host:'ssh.imad.hasura-app.io',
    port:'5432',
    password:db-umangakhar29-35877
};

var app = express();
app.use(morgan('combined'));

function createTemplate(data){}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


function hash (input, salt){
    // How do we create a hash?
    var hashed =crypto.pbkdf2Sync(input, salt, 10000 ,512, 'sha512');
    return hashed.toString('hex');
}
app.get('/hash/:input',function(req,res){
    var hashedString = hash(req.params.input, 'this-is-some-random-string');
    res.send(hashedString);
})

var counter=0;
app.get('/counter',function(req,res){
 counter =counter + 1;
 res.send(counter,toString());
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
