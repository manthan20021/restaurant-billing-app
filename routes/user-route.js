import express from "express"
const userRoute = express.Router()
import { loginUser, registerUser } from "../controllers/AuthController.js"
import { getUser, updatePassword } from "../controllers/userController.js"
import authMiddlerwer from "../middlewares/authMiddleware.js"

userRoute.post('/register', registerUser )
userRoute.post('/login', loginUser)
userRoute.get('/profile/:id', authMiddlerwer, getUser)
userRoute.patch('/update-password/:id', authMiddlerwer, updatePassword)



export default userRoute

