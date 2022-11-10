const express = require('express');
const admin = require('../controllers/adminController');
const router = express.Router();

router.post('/addAdmin', function(req,res){
    admin.create(req,res);
});

router.get('/getAdmin', function(req,res){
    admin.find(req,res);
});

module.exports = router;