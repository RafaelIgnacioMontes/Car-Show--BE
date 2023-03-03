const { Comment, User, Car } = require('../models')

const GetAllComments = async (req, res) => {
  try {
    let comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllComments
}
