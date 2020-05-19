const router = require('express').Router()
const { loginStudent, loginTeacher, registerStudent, registerTeacher, findAll } = require('../controllers/UserCtrl');
// const {findUser} = require('../middleware/findUser');
const taskRoutes = require('./task');

router.post('/register/student', registerStudent)
router.post('/register/teacher', registerTeacher)
router.post('/login/student', loginStudent)
router.post('/login/teacher', loginTeacher)
router.get('/', findAll)
router.use(taskRoutes);
// router.get('/:userid', findOne)
// router.put('/:userid', findUser, update)
// router.delete('/:userid', findUser,  drop)

module.exports = router