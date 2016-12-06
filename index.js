//////////////////////////////////////////////////////////////////////
var infoUnis={Trento:[0.2,0.1,0.34,0.23,"23%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"220 euro in average","20 euro/month"],Roma:[0.2,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","50 euro/month"],Italia:[0.2,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","90 euro/month"]}

var infoTrento =[0.2,0.1,0.34,0.23,"23%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"220 euro in average","20 euro/month"];

var infoRoma =[0.2,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","50 euro/month"];

var infoItalia =[0.2,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","90 euro/month"];
//////////////////////////////////////////////////////////////////////

// express lib
var express = require('express');

//util lib
var util = require('util');

//lib for templates
var bind = require('bind');

//lib for post request handling
var bodyParser = require('body-parser');

//useless for now
var fs = require('fs');

//instantiate express
var app = express();

app.set('port',(process.env.PORT||1337));

//to include css, src and images
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
//JSON post
app.use(bodyParser.json());

app.post('/tab',function(request,response){
    
    //console.log("sono entrato in post");
    var headers = {};
    headers["Content-Type"] = "application/json";
    
    var json;
    
    if(request.body.city == "Trento"){
        json = JSON.stringify({
            info: infoTrento
        })
    }
    else if(request.body.city == "Roma"){
        json = JSON.stringify({
            info: infoRoma
        })
    }
    else{
        json = JSON.stringify({
            info: infoItalia
        })
    }
    
    response.writeHead(200,headers);
    response.end(json);
});


//useless for now 
/*app.get('/filter',function(request,response){
    var headers = {};
    headers["Content-Type"] = "text/html";
    
    response.writeHead(200,headers);
    
    var html = fs.readFileSync('./pages/filter.html', 'utf8')
    response.end(html);  
});*/


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

/*app.post('/',function(request,response){
    console.log("hi");
    var headers = {};
    headers["Content-Type"] = "text/html";
    response.writeHead(200,headers);
    re
});*/



app.listen(app.get('port'), function(){
    console.log('Node app is running on port', app.get('port'));
});