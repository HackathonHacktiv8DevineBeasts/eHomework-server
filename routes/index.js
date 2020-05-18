const router = require('express').Router();
const UserController = require('../controllers/UserController');
const studentTaskRoutes = require('./studentTaskRoutes');

router.get('/login', UserController.login);
router.get('/register', UserController.register);
router.use('/tasks', studentTaskRoutes);

module.exports = router;