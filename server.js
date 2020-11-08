/*access @ 127.0.01; uses require() to import the http module & returns an object that acts as an API provided by the http module
 createServer() creates a server instance and returns a reference to it; paramater is a request listener - is executed whenever an http request is made to the server 
 80 is the port where the server listens
 inRequest and inResponse - objects representing the HTTP req and response to send back
*/
require("http").createServer((inRequest, inResponse) => {
	inResponse.end("hello from this node server");
}).listen(80);
