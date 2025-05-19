const { MySQLClient } = require("../lib/sql/client");

const router = require("express").Router();

//データの取得
router.get("/:id", async (req, res) => {
  var id = req.params.id
  console.log(id);

  try {
    const results = await MySQLClient.executeQuery(
      `
      SELECT
        *
      FROM
        user_info
      WHERE
        id = ?
      `,
      [id]
    );
    
    console.log(results);
    return res.status(200).json(results);

  } catch (err) {
    next(err);
  }
});

module.exports = router;