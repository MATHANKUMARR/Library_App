const express = require('express');
const student = require('../controllers/studentController');
const router = express.Router();

router.post('/addStudent', function(req,res){
    student.createStudent(req,res);
});

router.get('/getAllStudents', function(req,res){
    student.findAllStudents(req,res);
});

router.get('/getOneStudent/:id', function(req,res){
    student.findOneStudent(req,res);
});

router.patch('/updateStudent/:id', function(req,res){
    student.updateStudent(req,res);
});

router.delete('/removeStudent/:id', function(req,res){
    student.deleteStudent(req,res);
});

module.exports = router;