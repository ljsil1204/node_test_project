const express = require("express");
const app = express(); // express 어플리케이션 => 인스턴스

// 미들웨어 추가 시 사용 => use()
const logger = (req, res, next) => {
  console.log("i am logger");
  // 미들웨어는 next 함수를 사용해야한다. => 다음 로직을 수행할 수 있다.
  next();
};

app.use(logger);

app.listen(3000, () => {
  console.log("Server is running");
});
