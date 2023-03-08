const { Comment, User, Car } = require('../models')

const GetAllComments = async (req, res) => {
  try {
    let comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetAllCommentsForCar = async (req, res) => {
  try {
    let carsId = parseInt(req.params.car_id)
    const carComments = await Comment.findAll({ where: { car_id: carsId } })
    res.send(carComments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let carsId = parseInt(req.params.car_id)
    let commentBody = {
      userId,
      carsId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let updateComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    })
    res.send(updateComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted Comment with an id of ${commentId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllComments,
  UpdateComment,
  CreateComment,
  DeleteComment,
  GetAllCommentsForCar
}
