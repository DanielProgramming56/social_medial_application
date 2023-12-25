import express from "express"
import { loginUser, register } from "../controller/auth.js"
import { upload } from "../config/storage.js"
// router 
const route = express.Router()

route.post('/register', upload.single("picture"), register)
route.post("/login", loginUser)

export default route
