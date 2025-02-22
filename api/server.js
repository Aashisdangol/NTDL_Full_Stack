import 'dotenv/config'
import express from "express"
import cors from "cors"
import { connectToMongoDb } from "./src/config/dbConfig.js";
import taskRouter from "./src/router/taskRouter.js";
import path from "path"

const _dirname = path.resolve()
const app = express()
const PORT = process.env.PORT||8000 

// middleware to parse request
app.use(express.json());
//Define config for CORS
const corsOption = {
  credentials: true,
  origin: true // is an array with the list of whitelisted domains
}
app.use(cors(corsOption))

// Connect to Mongo Db
connectToMongoDb()

// SSR- serve frontend using out 
app.use('/', express.static(path.join(_dirname, 'dist')))


// Task Routes | Controller
app.use('/api/tasks', taskRouter)

// start a server
app.listen(PORT, (error)=>{
  error ? 
    console.log("Error", error) : 
    console.log("Your seerver is running at http://localhost:" + PORT)
})