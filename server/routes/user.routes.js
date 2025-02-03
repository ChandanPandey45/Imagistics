import {ragisterUser, loginUser, userCredits} from '../controllers/user.controller.js'
import express from 'express'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()


userRouter.post('/ragister' , ragisterUser)
userRouter.post('/login' , loginUser)
userRouter.post('/credits' , userAuth ,userCredits)

export default userRouter