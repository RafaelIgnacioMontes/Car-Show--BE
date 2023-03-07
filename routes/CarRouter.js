const router = require('express').Router()
const controller = require('../controllers/CarController')
const middleware = require('../middleware')

router.get('/all', controller.GetAllCars)
router.get(
  '/user/:user_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetAllCarsForUser
)

router.post(
  '/newcar',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateCar
)
router.delete(
  '/delete/:car_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCar
)

module.exports = router
