const Task = require('../models/Task');
const User = require('../models/User');

class TaskController {

    static async getTask (req, res) {
        console.log('masuk sini ga');
        let data;
        try {
            data = await Task.find();
            console.log('ini data');
            console.log(data);
            return res.status(200).json({
                    message: 'Fetch data success',
                    result: data
                })
        } catch (err) {
            return res.status(404).json({
                message: 'Error fetching task'
            })
        }
    }

    static async getTaskByEmail (req, res) {
        let email = req.params.email;
        try {
            let data = await Task.find({ emailStudent: email });
            return res.status(200).json({
                message: 'Fetch data success',
                result: data
            })
        } catch (err) {
            return res.status(404).json({
                message: 'Error fetching task'
            })
        }
    }

    static async getTaskById (req, res) {
        let id = req.params.id;
        try {
            await Task.findById(id).then((response) => {
                res.status(200).json({
                    emailStudent: response.emailStudent,
                    emailTeacher: response.emailTeacher,
                    score: response.score,
                    url: response.url,
                    status: response.status,
                    description: response.description,
                    taskName: response.taskName
                })
            })
        } catch (err) {
            return res.status(404).json({
                message: 'Error fetching task'
            })
        }
    }

    static async inputTask (req, res) {
        const { emailStudent, emailTeacher, score, url, status, description, taskName } = req.body;
        const inputedData = { emailStudent, emailTeacher, score, url, status, description, taskName };

        try {
            let mainData1 = await User.find({ role: 'student'});
            console.log('test ini result');
            let mainData = mainData1.map(el => {
                return { ...inputedData, emailStudent: el.email }
            })
            console.log(mainData);
            await Task.insertMany(mainData).then((response) => {
                res.status(201).json(response)
            })
        } catch (err) {
            return res.status(400).json({
                message: 'Invalid input task'
            })
        }
    }

    static async updateTask (req, res) {
        let id = req.params.id;
        console.log('masuk sini ga edit: ',id);
        const { emailStudent, emailTeacher, score, url, status, description, taskName } = req.body;
        const inputedData = { emailStudent, emailTeacher, score, url, status, description, taskName };

        try {
            await Task.findOneAndUpdate({_id : id}, inputedData, { new: true }).then((response) => {
                res.status(200).json(response)
            })
        } catch (err) {
            return res.status(400).json({
                message: 'Invalid input task'
            })
        }
    }

    static async deleteTask (req, res) {
        let id = req.params.id;
        console.log('masuk delete');

        try {
            await Task.findOneAndDelete({_id : id}, { rowResult: true }).then((response) => {
                res.status(200).json({
                    message: 'successfully delete task'
                })
            })
        } catch (err) {
            return res.status(403).json({
                message: 'Forbidden delete task'
            })
        }
    }
}

module.exports = TaskController;