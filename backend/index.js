import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./utils/database.js"
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js"


dotenv.config({
    path:".env"
})
databaseConnection();

const app = express()
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cookieParser())

// this is apis 
app.use("/api/v1/user", userRoute);


app.listen(process.env.PORT,()=>{
    console.log(`server is listing on port ${process.env.PORT}`)
})