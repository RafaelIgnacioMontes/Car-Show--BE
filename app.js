const express = require('express')
const cors = require('cors')
const AuthRouter = require('./routes/AuthRouter')
const UserRouter = require('./routes/UserRouter')
const CarsRouter = require('./routes/CarRouter')
const CommentRouter = require('./routes/CommentRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', AuthRouter)
app.use('/posts', PostRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
