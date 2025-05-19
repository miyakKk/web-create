const { MySQLClient } = require("../lib/sql/client");
const bcrypt = require("bcrypt")

const router = require("express").Router();

// const hashFunc = (password) => {
//   return bcrypt.hashSync(password, 10);
// };

//新規登録登録
router.post("/register", async (req, res) => {
  var name = req.body.user_name;
  var email = req.body.user_email;
  var password = req.body.user_password;
  var confirmationPassword = req.body.user_confirmationPassword;

  existEmail = await MySQLClient.executeQuery(
    `
    SELECT
      user_email
    FROM
      user_info
    WHERE
      user_email = ?;
    `,
    [email]
  );
  // console.log(existEmail.length);

  //認証
  if (existEmail.length >= 1) return res.status(400).json("このEメールアドレスはすでに使われています。");
  if (password !== confirmationPassword) return res.status(400).json("パスワードが一致しません。");

  try {
    const results = await MySQLClient.executeQuery(
      `
      INSERT INTO user_info
        (user_name, user_email, user_password)
      VALUES
        (?, ?, ?);
      `,
      [name, email, password]
    );
    console.log(results);
    return res.status(200).json("ユーザーを登録しました。");
    
  } catch (err) {
    next(err);
  }
});

//ログイン
router.post("login", async (req, res) => {
  email = res.body.user_email
  password = res.body.user_password

  try{

  } catch (err) {
    return res.status(500).json(err);
  }

})


module.exports = router;

