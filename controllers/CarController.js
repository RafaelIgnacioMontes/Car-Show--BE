const { User, Car, Comment } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll()
    res.send(cars)
  } catch (error) {
    throw error
  }
}

const FindCarByPk = async (req, res) => {
  try {
<<<<<<< HEAD
    const car = await Car.findByPk(req.params.id)
=======
    const car = await Car.findByPk(req.params.id, {
      include: [{ model: Comment, as: 'comments' }]
    })
>>>>>>> 4484900add17fc066004d01094eba1fd76ce5e28
    res.send(car)
    console.log(car)
  } catch (error) {
    throw error
  }
}

const GetAllCarsForUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const userCars = await Car.findAll({ where: { user_id: userId } })
    res.send(userCars)
  } catch (error) {
    throw error
  }
}

const CreateCar = async (req, res) => {
  try {
    const car = await Car.create({ ...req.body })
    res.send(car)
  } catch (error) {
    throw error
  }
}

const DeleteCar = async (req, res) => {
  try {
    let carId = parseInt(req.params.car_id)
    await Car.destroy({ where: { id: carId } })
    res.send({ message: `Deleted Car with an id of ${carId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllCars,
  CreateCar,
  DeleteCar,
  GetAllCarsForUser,
  FindCarByPk
}
