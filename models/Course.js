//Schema for the Students
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
        chapters: [{
            id:{
                type:mongoose.Types.ObjectId
            },
            videoLink: {
                type: String,
                required: true,
            },
            duration: {
                type: Number,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
        }
            
    
    ],
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    instructorName:{
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    visibility:{
        type: String,
        required: true,
    }
},{
    timestamps:true
});

const Course = mongoose.model('Course',courseSchema);
module.exports = Course;