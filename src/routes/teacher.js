const express = require('express');
const teacherSchema = require('../models/teacher');

const router = express.Router();

//create teacher
router.post('/teacher', (req, res) => {
   const teacher = teacherSchema(req.body);
   teacher.save()
   .then(data => res.json(data)).catch(err => res.json({message: err}));
});

//get teacher
router.get('/teacher', (req, res) => {
    teacherSchema.find()
    .then(data => res.json(data)).catch(err => res.json({message: err}));
 });

 //update teacher
router.put('/teacher/:id', (req, res) => {
   const {id} = req.params;
   const {name, lastName, age} = req.body;
   teacherSchema.updateOne({_id: id}, {$set : {name, lastName, age}})
    .then(data => res.json(data)).catch(err => res.json({message: err}));
 });

module.exports = router;