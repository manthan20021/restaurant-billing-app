import express from "express"
const userRoute = express.Router()
import user from "../models/user-models.js"

userRoute.post('/rag', async (req, res) => {
   try {
     const userInput = req.body
    const userData = user(userInput)
    const response = await userData.save()
    res.status(200).json({
        message: "user registers sucsessfully",
        response: response
    })
   } catch (error) {
    res.json({
        message:"user is not valid",
        error: error
    })
   }
})

userRoute.get('/rag', async(req, res)=>{
   try {
     const userData = await user.find()
    res.status(200).json(userData)
   } catch (error) {
    res.json({
        message: "user not found",
        error:error
    })
   }
})

export default userRoute