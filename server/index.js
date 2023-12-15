import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import { upload } from "./config/storage.js"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"
import { connectDB } from "./config/database.js"

// CONFIGURATION
const __filename__ = fileURLToPath(import.meta.url)
const __dirname__ = path.dirname(__filename__)
dotenv.config()
const app = express()
app.use(helmet())
app.use(express.json())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use("/asserts", express.static(path.join(__dirname__, "public/assets")))

// PORT
const port = process.env.PORT || 6000
if (connectDB()) {
    app.listen((port), () => {
        console.log(`Your application is running in port ${port}`);
    })
}
