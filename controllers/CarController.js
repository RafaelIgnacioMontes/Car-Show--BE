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
    const car = await Car.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          as: 'comments',
          // required: true,
          include: { model: User, as: 'car' }
        }
      ]
    })
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
    await Car.destroy({ where: { id: req.params.car_id } })
    res.send({
      message: `Deleted Car with an id of ${req.params.car_id}`,
      payload: req.params.car_id,
      status: 'Ok'
    })
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
