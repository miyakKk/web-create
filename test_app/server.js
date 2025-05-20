const express = require("express");
const app = express();
const mysql = require("mysql2");
const dataRouter = require("./routes/data");
const authRouter = require("./routes/auth");
const uploadRouter = require("./routes/upload");
const dbConfig = require("./config/mysql_config");
PORT = 8000;

//mysqlとの接続
const con = mysql.createConnection({
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  user: dbConfig.USERNAME,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});

con.connect((err) => {
  if (err) {
    throw err;
  };
  console.log("DBに接続中・・・");
});

//ミドルウェア
app.use(express.json());
app.use("/api/data", dataRouter);
app.use("/api/auth", authRouter);
app.use("/api/upload", uploadRouter);



app.get("/", (req, res) => {
  res.send("hello world");
})


app.listen(PORT, () => console.log("サーバーが起動しました"));