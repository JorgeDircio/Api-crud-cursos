const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('course', courseSchema);