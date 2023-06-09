// espress => 설치명령어 : npm install express
const express = require("express");

// morgan => 설치명령어 : npm install morgan
//https://www.npmjs.com/package/morgan => 설명서
const morgan = require("morgan");

// express 어플리케이션 => 인스턴스 만들기
const app = express();

// 일반 미들웨어 => 3개의 파라미터
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

//에러미들웨어 사용해보기 예시
function commonnw(req, res, next) {
  console.log("commonnw");
  next(new Error("error ouccered"));
}

// 에러 미들웨어 => 4개의 파라미터, 첫번째 파라미터가 error
function errormw(err, req, res, next) {
  console.log(err.message);
  //에러를 처리하거나
  next();
}

// 미들웨어 함수
app.use(logger);
app.use(logger2);
app.use(commonnw);
app.use(errormw);

//써드파티 미들웨어 사용하기
// require로 불러온 후, app.use 함수로 불러온다.
app.use(morgan("dev")); //출력결과예시 : GET / 404 3.726 ms - 139

//라우팅 설정
app.get("/", function (req, res) {
  // 문자열 출력 메소드
  res.send("Hello World");
});

//서버 요청대기 상태
app.listen(3001, () => {
  console.log("Express Server port 3001");
});

// ================================================================================================//
// 익스프레스 요청객체와 응답객체
// http 모듈의 request객체, response 객체를 래핑
// 요청객체 메소드 : req.params(), req,query(), req.body()
// 응답객체 메소드 : res.send(), res.status(), res.json()
