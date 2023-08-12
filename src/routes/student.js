const express = require('express');
const studentSchema = require('../models/student');

const router = express.Router();

//create student
router.post('/student', (req, res) => {
   const student = studentSchema(req.body);
   student.save()
   .then(data => res.json(data)).catch(err => res.json({message: err}));
});

//get student
router.get('/student', (req, res) => {
    studentSchema.find()
    .then(data => res.json(data)).catch(err => res.json({message: err}));
 });

module.exports = router;