const Task = require('../models/Task');

class TaskController {

    static async getTask () {
        try {
            await Task.find().then((response) => {
                res.status()
            })
        } catch (err) {

        }
    }

    static async inputTask () {
        try {

        } catch (err) {
            
        }
    }

    static async updateTask () {
        try {

        } catch (err) {
            
        }
    }

    static async deleteTask () {
        try {

        } catch (err) {
            
        }
    }
}

module.exports = TaskController;