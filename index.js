const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hellow World\n");
});

server.listen(port, hostname, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);

// curl - http 요청을 보낼수 있는 커맨드라인 명령어
// curl -X GET 'localhost:3000'
