//Importing HTTP Package
const http = require('http');

//Hostname Declare
const hostname = '127.0.0.1';
//PortNumber Declare
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  //Printing Hello World
  console.log("Hello World")
});