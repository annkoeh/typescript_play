/* 1. Builds an http.Request object, providing connection details
2. send an arbitrary data sring to the remote server and build a response string
3. 'on' fires everytime the server sends back a chunk of data, which is added to the finalResponse string 
4. finalResponse string is displayed when the "end" event fires (signifies the response has been received)
*/

let finalResponse = "";
const request = require("http").request(
	{
	hostname : "www.some_remote_system.com",
	port : 80,
	path : "/someAPI",
	method : "POST"
	},
	(inResponse) => {
	console.log(`STATUS: ${inResponse.statusCode}`);
	inResponse.setEncoding("utf8");
	inResponse.on("data", (inDataChunk) => {
		finalResponse += inDataChunk.
	});
	inResponse.on("end", () => {
	console.log(finalResponse);
	});
	}
);

request.write("Some data to send to the remote system");request.end();