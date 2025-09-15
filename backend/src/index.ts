import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// env 파일 로드
dotenv.config();

// 서버 실행 포트
const PORT = Number(process.env.SERVER_PORT);

const app = express();
app.use(
  cors({
    origin: process.env.SERVER_CORS_ORIGIN, // CORS 허용 도메인 설정
    credentials: true,
  })
);

app.use(express.json()); // JSON 요청을 처리 미들웨어
app.use(bodyParser.json()); // JSON 파싱 미들웨어

// 기본 라우트 설정
app.get("/", (req, res) => {
  res.send("Maple Web Server!");
});

// 서버 시작
app.listen(PORT, "0.0.0.0", () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
