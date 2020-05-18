const router = require('express').Router()
const { findAll, findOne, register, update, login, drop } = require('../controllers/UserCtrl.js')
const {findUser} = require('../middleware/findItem.js')

router.post('/register', register)
router.post('/login', login)
router.get('/', findAll)
router.get('/:userid', findOne)
router.put('/:userid', findUser, update)
router.delete('/:userid', findUser,  drop)

module.exports = router