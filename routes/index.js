const express = require('express');
const router = express.Router();

const { createRichMenu } = require('../services/create-richmenu');
const { deleteRichMenu } = require('../services/delete-richmenu');

// localhost:5000/createrichmenu
router.get('/createrichmenu', async function(req, res, next) {
  await createRichMenu();
  return res.status(200).json({message: 'สร้างเมนูสำเร็จ'});
});

// localhost:5000/deleterichmenu
router.get('/deleterichmenu', async function(req, res, next) {
  await deleteRichMenu();
  return res.status(200).json({message: 'ลบเมนูสำเร็จ'});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;