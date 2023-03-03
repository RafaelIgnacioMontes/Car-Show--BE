const Router = require('express').Router()
const CarRouter = require('./CarRouter')
const CommentRouter = require('./CommentRouter')
const UserRouter = require('./UserRouter')

Router.use('/car', CarRouter)
Router.use('/comment', CommentRouter)
Router.use('/user', UserRouter)
module.exports = Router
