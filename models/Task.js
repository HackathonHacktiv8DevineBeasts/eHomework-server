const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {

    },
    class: {

    }
})

module.exports = mongoose.model('Task', taskSchema);