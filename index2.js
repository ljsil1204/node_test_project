// http 모듈
const http = require("http");

// 서버주소와 포트 설정
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  //   console.log(req.url); // req.url => 클라이언트가 요청하는 url 정보 들어있음

  if (req.url === "/") {
    // 루트 주소로 요청이 왔을 때
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hellow World\n"); // end 함수로 클라이언트에게 보내줌
  } else if (req.url === "/users") {
    // users 주소로 요청이 왔을 때
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("User list");
  } else {
    // 루트 주소가 아닌 다른 경우로 요청이 올 때
    res.statusCode = 404;
    res.end("Not Found");
  }
});

// listen - 서버를 요청 대기 상태로 만들어주는 함수 => 서버가 클라이언트의 요청을 받기 위해서 종료하지 않고 대기하는 상태
server.listen(port, hostname, () =>
  // 서버구동 시 실행되는 함수
  console.log(`Server running at http://${hostname}:${port}/`)
);

// curl - http 요청을 보낼수 있는 커맨드라인 명령어
// curl -X GET 'localhost:3000'
// curl -X GET '127.0.0.1:3000'
