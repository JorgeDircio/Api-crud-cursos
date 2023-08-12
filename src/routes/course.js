const express = require('express');
const courseSchema = require('../models/course');

const router = express.Router();

//create course
router.post('/course', (req, res) => {
   console.log("req ", req.body)
   const course = courseSchema(req.body);
   course.save()
   .then(data => res.json(data)).catch(err => res.json({message: err}));
});

//get course
router.get('/course', (req, res) => {
    courseSchema.find()
    .then(data => res.json(data)).catch(err => res.json({message: err}));
 });

module.exports = router;