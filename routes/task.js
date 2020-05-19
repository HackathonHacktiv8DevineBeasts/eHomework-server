const taskRoutes = require('express').Router();
const TaskController = require('../controllers/TaskController');
const {authentication} = require("../middleware/authentication")
const {authorization} = require('../middleware/authorization')

taskRoutes.use(authentication)

taskRoutes.get('/task', TaskController.getTask);
taskRoutes.get('/task/:id', TaskController.getTaskById);
taskRoutes.get('/task/email/:email', TaskController.getTaskByEmail);
taskRoutes.post('/task', authorization, TaskController.inputTask);
taskRoutes.put('/task/edit/:id', TaskController.updateTask);
taskRoutes.delete('/task/delete/id/:id', authorization, TaskController.deleteTaskById);
taskRoutes.delete('/task/deleteByName', authorization, TaskController.deleteTaskByName);

module.exports = taskRoutes;