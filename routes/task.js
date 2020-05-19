const taskRoutes = require('express').Router();
const TaskController = require('../controllers/TaskController');
const {authentication} = require("../middleware/authentication")

taskRoutes.use(authentication)

taskRoutes.post('/task', TaskController.inputTask);
taskRoutes.get('/task', TaskController.getTask);
taskRoutes.get('/task/:id', TaskController.getTaskById);
// taskRoutes.get('/task/:email', TaskController.getTaskByEmail);
taskRoutes.put('/task/edit/:id', TaskController.updateTask);
taskRoutes.delete('/task/delete/:id', TaskController.deleteTask);

module.exports = taskRoutes;