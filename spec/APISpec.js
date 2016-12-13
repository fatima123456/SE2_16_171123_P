//test of the APIs

//lib for sending request
var request = require("request");

/* Test for /
  * it checks if the server answers with 200 code header
  */
describe("Test /", function() {
    it("returns status code 200", function(done) {
        request.get('http://localhost:1337/', 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

/* Test for /ita
  * it checks if the server answers with 200 code header
  */
describe("Test /ita", function() {
    it("returns status code 200", function(done) {
        request.get('http://localhost:1337/ita', 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

//library for JSON requests
requestJSON = require('request-json');
var client = requestJSON.createClient("http://localhost:1337/");

/* Test for /tab
  * it checks if the server answers with 200 code header
  */
describe("Test /tab", function() {
    var data = {city:'Trento', depart:'average'};
    it("returns status code 200", function(done) {
        client.post('http://localhost:1337/tab',data, 
            function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
    }); 
});

// for lack of time I didn't write the test for all my code :)



