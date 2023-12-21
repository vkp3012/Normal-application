import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { signUp } from "./controllers/userController.js";

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.post("/auth/signup", signUp )

const port = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("MOngoDB connected")
        app.listen(port,()=>{
            console.log(`Server listen port is ${port}`);
        })
    })
    .catch((error)=>{
        console.log(error)
    })
