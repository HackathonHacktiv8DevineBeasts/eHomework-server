const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    emailStudent: {
        type: String,
        required: [true, 'Email Student must be filled']
    },
    emailTeacher: {
        type: String,
        required: [true, 'Email Teacher must be filled']
    },
    score: {
        type: Number,
        required: [true, 'Score must be filled'],
        max: [100, 'Maximum score was 100'],
        min: [0, 'Minumum score must be 0']
    },
    url: {
        type: String,
        required: [true, 'Url must be filled']
    },
    viewURL: {
        type: String,
        required: [true, 'View URL must be filled']
    },
    status: {
        type: Boolean,
        required: [true]
    },
    description: {
        type: String,
        required: [true, 'Description must be filled']
    },
    taskName: {
        type: String,
        required: [true, 'Task Name must be filled']
    }
})

module.exports = mongoose.model('Task', taskSchema);