import express from "express"
const userRoute = express.Router()
import { loginUser, registerUser } from "../controllers/AuthController.js"
import { getUser, updatePassword } from "../controllers/userController.js"
//import authMiddlerwer from "../middlewares/authMiddleware.js"

userRoute.post('/register', registerUser )
userRoute.post('/login', loginUser)
userRoute.get('/profile', getUser)
userRoute.put('/update-password', updatePassword)



export default userRoute

