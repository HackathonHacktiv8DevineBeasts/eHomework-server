const router = require('express').Router();
const TaskController = require('../controllers/TaskController');

router.get('/task', TaskController.getTask);
router.get('/task/:id', TaskController.getTaskById);
router.post('/task', TaskController.inputTask);
router.put('/task/edit/:id', TaskController.updateTask);
router.delete('/task/delete/:id', TaskController.deleteTask);

module.exports = router;