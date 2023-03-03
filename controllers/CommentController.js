const { Comment, User, Car } = require('../models')

const GetAllComments = async (req, res) => {
  try {
    let comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let carId = parseInt(req.params.car_id)
    let commentBody = {
      userId,
      carId,
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
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllComments,
  UpdateComment,
  CreateComment
}
