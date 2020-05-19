const Task = require('../models/Task');
const User = require('../models/User');
const ObjectId = require('mongodb').ObjectID;
var data
var id
class TaskController {

    static async getTask (req, res) {
        console.log('masuk sini ga');
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
            data = await Task.find({ emailStudent: email });
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
        
        try {
            // await Task.findById(id).then((response) => {
            //     res.status(200).json({
            //         emailStudent: response.emailStudent,
            //         emailTeacher: response.emailTeacher,
            //         score: response.score,
            //         url: response.url,
            //         status: response.status,
            //         description: response.description,
            //         taskName: response.taskName
            //     })
            // })

            id = ObjectId(req.params.id);
            console.log("THIS IS TASK ID TO FIND", id);

            data = await Task.findOne({_id: id})
                console.log("SANITY CHECK IN FINDBYID");
                console.log(data);
                if(data) {
                        return res.status(200).json({
                        _id: data._id,
                        emailStudent: data.emailStudent,
                        emailTeacher: data.emailTeacher,
                        score: data.score,
                        url: data.url,
                        viewURL: data.viewURL,
                        status: data.status,
                        description: data.description,
                        taskName: data.taskName
                    })
                }
                
            
        } catch (err) {
            return res.status(404).json({
                message: 'Error fetching task'
            })
        }
    }

    static async inputTask (req, res) {
        const { emailStudent, emailTeacher, score, url, viewURL, status, description, taskName } = req.body;
        const inputedData = { emailStudent, emailTeacher, score, url, viewURL, status, description, taskName };

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
        id = ObjectId(req.params.id);
        console.log('masuk sini ga edit: ',id);
        const { emailStudent, emailTeacher, score, url, viewURL, status, description, taskName } = req.body;
        const inputedData = { emailStudent, emailTeacher, score, url, viewURL, status, description, taskName };

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

    static async deleteTaskById (req, res) {

        id = ObjectId(req.params.id);
        console.log('masuk delete', id);

        try {
            
            // await Task.findOneAndDelete({_id : id}, { rowResult: true }).then((response) => {
            //     res.status(200).json({
            //         message: 'successfully delete task'
            //     })
            // })

            data = await Task.findOneAndDelete({_id : id}, { rawResult: true })

            if(data) {
                return res.status(200).json({
                    message: 'successfully delete task',
                    result: data
                })
            } 

        } catch (err) {
            return res.status(403).json({
                message: 'Forbidden delete task'
            })
        }
    }


    static async deleteTaskByName (req, res) {

       console.log("DELETE BY NAME, USE REQ.QUERY");
       console.log(req.query);
       var name = req.query.name

       try {
        //    data = await Task.deleteMany({taskName: {$in:[`/${name}/`] }})
            data = await Task.deleteMany({taskName: name})
           if(data) {
               res.status(200).json({
                   message: `TASK ${name} DROPPED FROM DB`,
                   result: data
               })
           }
       }
       catch(err) {
           console.error(err)
       }

    }
}

module.exports = TaskController;