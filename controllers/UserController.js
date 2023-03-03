const { User } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attribute: userName })
    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers
}
