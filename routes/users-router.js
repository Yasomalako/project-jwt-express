const router = require('express').Router()
const {logIn,registedUser}= require('../controllers/users-controller')
router.post('/addUser',registedUser)
router.post('/userRegester',logIn)

module.exports = router