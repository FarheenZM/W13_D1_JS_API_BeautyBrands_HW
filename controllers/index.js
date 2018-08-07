const express = require('express');
const router = new express.Router();

router.use('/makeup', require('./makeup'));
router.use('/fragrances', require('./fragrances'));

router.get('/', function(req, res){
  res.json({data: "Welcome to Beauty database!"})
});

router.get('/about', function(req, res){
  res.json({data: "All the beauty brands available here."});
});

module.exports = router;
