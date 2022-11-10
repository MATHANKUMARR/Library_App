const express = require('express');
const book = require('../controllers/bookController');
const router = express.Router();

router.post('/addBook', function(req,res){
    book.createBook(req,res);
});

router.get('/getAllBooks', function(req,res){
    book.findAllBooks(req,res);
});

router.get('/getOneBook/:id', function(req,res){
    book.findOneBook(req,res);
});

router.patch('/updateBook/:id', function(req,res){
    book.updateBook(req,res);
});

router.delete('/removeBook/:id', function(req,res){
    book.deleteBook(req,res);
});

module.exports = router;