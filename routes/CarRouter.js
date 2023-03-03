const router = require('express').Router()
const controller = require('../controllers//CarController')
const middleware = require('../middleware')

router.get('/all', controller.GetAllCars)

module.exports = router
