const express = require('express');
const list = require('../controllers/listController');
const router = express.Router();

router.post('/addDetails', function(req,res){
    list.createBookDetails(req,res);
});

router.get('/getAllDetails', function(req,res){
    list.findAllBookDetails(req,res);
});

router.delete('/removeOneElement/:id', function(req,res){
    list.deleteBookDetails(req,res);
});

module.exports = router;