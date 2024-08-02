import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// error handler middleware to catch errors
app.use((err, req, res, next) => {
  console.log('an error occurred', err.message)
  res.json({message: `had an error: ${err.message}`})
})

// because this is a miniapp it needs its error handler middleware to catch errors
app.use('/api', protect, router)

app.post('/user', createNewUser)
app.post('/signin', signin)


export default app
