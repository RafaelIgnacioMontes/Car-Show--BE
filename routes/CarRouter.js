const router = require('express').Router()
const controller = require('../controllers/CarController')
const middleware = require('../middleware')

router.get('/all', controller.GetAllCars)
router.get('/user/:user_id', controller.GetAllCarsForUser)

router.post('/newcar', controller.CreateCar)
router.delete('/delete/:car_id', controller.DeleteCar)
router.get('/car/:id', controller.FindCarByPk)

module.exports = router
