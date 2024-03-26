var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res) {
  res.render ("index");
});

router.get('/login', function(req, res) {
  res.render ("login");
});

router.get('/product-add', function(req, res) {
  res.render ("product-add");
});

router.get('/product', function(req, res) {
  res.render ("product");
});

router.get('/profile-edit', function(req, res) {
  res.render ("profile-edit");
});

router.get('/profile', function(req, res) {
  res.render ("profile");
});

router.get('/register', function(req, res) {
  res.render ("register");
});

router.get('/search-results', function(req, res) {
  res.render ("search-results");
});



module.exports = router;
