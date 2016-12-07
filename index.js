//////////////////////////////////////////////////////////////////////
var ave={Trento:[0.2,0.1,0.34,0.23,"23%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"220 euro in average","20 euro/month"],Roma:[0.2,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","50 euro/month"],Italia:[0.2,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","90 euro/month"]};

var eng={Trento:[0.3,0.1,0.34,0.23,"23%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"220 euro in average","20 euro/month"],Roma:[0.3,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","50 euro/month"],Italia:[0.2,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","90 euro/month"]};

var lang={Trento:[0.4,0.1,0.34,0.23,"23%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"220 euro in average","20 euro/month"],Roma:[0.4,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","50 euro/month"],Italia:[0.2,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","90 euro/month"]};

var med={Trento:[0.5,0.1,0.34,0.23,"23%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"220 euro in average","20 euro/month"],Roma:[0.5,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","50 euro/month"],Italia:[0.2,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","90 euro/month"]};

var soc={Trento:[0.6,0.1,0.34,0.23,"23%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"220 euro in average","20 euro/month"],Roma:[0.6,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","50 euro/month"],Italia:[0.2,0.1,0.34,0.23,"93%",0.12,0.36,0.7,0.56,0.8,0.5,0.2,"1234 euro","yes",0.4,"240 euro in average","90 euro/month"]};

var infoUnis={average: ave, engineering: eng, languages: lang, medicine: med, sociology: soc};

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
    
    console.log("sono entrato in post");
    var headers = {};
    headers["Content-Type"] = "application/json";
    
    var res=infoUnis[request.body.depart];
    
    var json=JSON.stringify({
        info: res[request.body.city]
    });
    
    response.writeHead(200,headers);
    response.end(json);
});


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