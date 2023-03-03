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

const GetCarDetails = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const CreateCar = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let commentId = parseInt(req.params.comment_id)
    let carBody = {
      userId,
      commentId,
      ...req.body
    }
    let car = await Car.create(carBody)
    res.send(car)
  } catch (error) {
    throw error
  }
}

const DeleteCar = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllCars,
  GetCarDetails,
  CreateCar,
  DeleteCar
}
