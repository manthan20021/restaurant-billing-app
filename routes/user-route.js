import express from "express"
const userRoute = express.Router()
import { loginUser, registerUser } from "../controllers/AuthController.js"
import { getUser, logoutUser, updatePassword } from "../controllers/userController.js"
import authMiddlerwer from "../middlewares/authMiddleware.js"

userRoute.post('/register', registerUser )
userRoute.post('/login', loginUser)
userRoute.get('/profile', authMiddlerwer, getUser)
userRoute.put('/update-password',authMiddlerwer, updatePassword)
userRoute.get('/logout',authMiddlerwer, logoutUser)


export default userRoute