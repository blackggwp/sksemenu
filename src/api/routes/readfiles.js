var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

router.get('/', async function (req, res, next) {
  const brandid = req.query.brandid
  const type = req.query.type
  const dirRelativeToPublicFolder = `images/${type}/${brandid}`
  const dir = path.resolve("./public", dirRelativeToPublicFolder);
  try {
    var files = fs.readdirSync(dir)
  } catch (error) {
    // console.error(error)
    return res.status(404).json({ statusCode: 404, errMsg: error })
  }
  let images = []
  if (files) {
    files.forEach(file => {
      if (path.extname(file).toLowerCase() === (".jpg" || ".png" || ".jpeg" || ".webp" || ".gif")) {
        images.push(`/${dirRelativeToPublicFolder}/${file}`)
      }
    })
  }
  if (images) {
    res.statusCode = 200;
  } else res.send(false)
  res.json(images);
})

module.exports = router;
