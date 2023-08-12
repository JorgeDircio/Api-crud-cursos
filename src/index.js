const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const studentRouter = require('./routes/student');
const courseRouter = require('./routes/course');
const teacherRouter = require('./routes/teacher');
const app = express();
const port = process.env.PORT || 9000;

//Evitar el cors
app.use(cors());

//middleware
app.use(express.json())
app.use('/api', studentRouter);
app.use('/api', courseRouter);
app.use('/api', teacherRouter);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connect MONGOBD"))
    .catch((err) => console.log(err));

app.listen(port, () => console.log('server listen in port ', port));