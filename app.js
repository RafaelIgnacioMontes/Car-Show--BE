const express = require('express')
const cors = require('cors')
const AuthRouter = require('./routes/AuthRouter')
const UserRouter = require('./routes/UserRouter')
const CarsRouter = require('./routes/CarRouter')
const CommentRouter = require('./routes/CommentRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/user', UserRouter)
app.use('/cars', CarsRouter)
app.use('/comment', CommentRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
