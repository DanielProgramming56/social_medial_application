import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url"
import { connectDB } from "./config/database.js"
import api from "./routes/api.js"

// CONFIGURATION
const __filename__ = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename__)
dotenv.config()

const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Router 
app.use("/api", api)
// PORT
const port = process.env.PORT || 6000
if (connectDB()) {
    app.listen((port), () => {
        console.log(`Your application is running in port ${port}`);
    })
}

