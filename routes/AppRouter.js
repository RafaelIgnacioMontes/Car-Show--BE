const Router = require('express').Router()
const CarRouter = require('./CarRouter')
const CommentRouter = require('./CommentRouter')
const UserRouter = require('./UserRouter')

Router.use('/cars', CarRouter)
Router.use('/comment', CommentRouter)
Router.use('/user', UserRouter)
Router.use('/auth', AuthRouter)
module.exports = Router
