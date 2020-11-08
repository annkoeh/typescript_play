/* API for the request module - pass a URL and a callback function which executes the response to the call comes back
*/
require("http").createServer((inRequest, inResponse) => {
  const requestModule = require("request");
  requestModule(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    function (inErr, inResp, inBody) {
      inResponse.end(
        `Hello from my first Node Web server: ${inBody}`
      );
    }
  );
}).listen(80);