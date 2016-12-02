// express lib
var express = require('express');

//util lib
var util = require('util');

//lib for templates
var bind = require('bind');

//instantiate express
var app = express();

app.set('port',(process.env.PORT||1337));

//to include css, src and images
app.use(express.static(__dirname + '/public'));

app.get('/ita',function(request,response){
    var headers = {};
    headers["Content-Type"] = "text/html";
    
    bind.toFile('pages/home.tpl',
    {
        italianHome: true
    },
    function(data){
        response.writeHead(200,headers);
        response.end(data);
    });
});

app.get('/', function(request, response){
    var headers={};
    //
    headers["Access-Control-Allow-Origin"] = "*"; //for cross enviroment request
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers
    //answer
    headers["Content-Type"] = "text/html";//format response
    
    bind.toFile('pages/home.tpl',
    {
        englishHome: true
    },
    function(data){
        response.writeHead(200,headers);
        response.end(data);
    });
});



app.listen(app.get('port'), function(){
    console.log('Node app is running on port', app.get('port'));
});