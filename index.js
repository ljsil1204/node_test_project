// espress => 설치명령어 : npm install express
const express = require("express");

// morgan => 설치명령어 : npm install morgan
//https://www.npmjs.com/package/morgan => 설명서
const morgan = require("morgan");

// express 어플리케이션 => 인스턴스 만들기
const app = express();

// 미들웨어 추가 시 사용 => use()
const logger = (req, res, next) => {
  console.log("i am logger");
  // 미들웨어는 next 함수를 사용해야한다. => 다음 로직을 수행할 수 있다.
  next();
};

const logger2 = (req, res, next) => {
  console.log("i am logger2");
  next();
};

// 미들웨어 함수
app.use(logger);
app.use(logger2);

//써드파티 미들웨어 사용하기
// require로 불러온 후, app.use 함수로 불러온다.
app.use(morgan("dev")); //출력결과예시 : GET / 404 3.726 ms - 139

app.listen(3001, () => {
  console.log("Server is running");
});
