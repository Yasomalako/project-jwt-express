const router = require('express').Router()
const {logIn,register}= require('../controllers/users-controller')

router.post('/addUser',register)
router.post('/userRegester',logIn)

module.exports = router