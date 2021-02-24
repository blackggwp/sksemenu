var express = require('express');
var fs = require('fs');
var path = require('path');
var utils = require("./../utils/ConvertToArr");
var router = express.Router();
const sql = require('mssql');

const mssqlConfig = {
  user: "sa",
  password: "admin1234",
  server: "localhost",
  database: "test",
  "options": {
    encrypt: true,
    "enableArithAbort": true
  },
};

router.get('/readfiles', async function (req, res, next) {

  function readFiles(dirname, onFileContent) {
    fs.readdir(dirname, function (err, filenames) {
      if (err) {
        return console.log(err);
      }
      filenames.forEach(function (filename) {

        fs.readFile(dirname + filename, 'utf-8', function (err, content) {
          if (err) {
            return console.log(err);
          }
          onFileContent(filename, content);
        });
      });
    });
  }

  readFiles('./public/files/', async function (filename, content) {

    const resObj = utils.combineObj(["transaction_no", "mobile", "amount"], content)

    //save to db
    const status = await insertDB('test', Object.keys(resObj), Object.values(resObj))

    res.sendStatus(200)
  }, function (err) {
    throw err;
  });

  async function insertDB(db_name, colName, vals) {
    try {
      let statement = `insert into ${db_name}.dbo.t_inv
      (${utils.joinCols(colName)}) values (${utils.joinVal(vals)})`
      let pool = await sql.connect(mssqlConfig)
      let result1 = await pool.request().query(statement)
    } catch (err) {
      // console.error(err)
      return ` ${err} DBName: ${db_name} `
    }
  }


});

module.exports = router;
