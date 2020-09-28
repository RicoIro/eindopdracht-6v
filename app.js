var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
  console.log(request.url);

  response.writeHead(200, {'Content-Type': 'text/html'});
  var html = fs.readFileSync('html-templates/home.html', 'utf8');
  html = html.replace("###datum###", new Date.toString);
  html = html.replace('###URL###', request.url);

  response.write(html);
  response.end();
}

var server = http.createServer(onRequest);
server.listen(8080);