const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get('/all', controller.GetUsers)
router.delete('/delete/:user_id', controller.DeleteUser)
module.exports = router
