const router = require('express').Router()
const { findAll, findOne, register, update, login, drop } = require('../controllers/UserCtrl');
const {findUser} = require('../middleware/findUser');

router.post('/register', register)
router.post('/login', login)
router.get('/', findAll)
router.get('/:userid', findOne)
router.put('/:userid', findUser, update)
router.delete('/:userid', findUser,  drop)

module.exports = router