const path = require("path");
const pool = require("./pool.js");
const Transaction = require("./transaction.js");

const MySQLClient = {
  executeQuery: async function (query, values){
    var results = await pool.executeQuery(query, values);
    return results;
  },
  beginTransaction: async function () {
    var tran = new Transaction();
    await tran.begin();
    return tran;
  }
};

module.exports = {
  MySQLClient
};