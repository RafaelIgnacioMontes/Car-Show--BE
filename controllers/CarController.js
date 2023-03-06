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
  DeleteCar
}
