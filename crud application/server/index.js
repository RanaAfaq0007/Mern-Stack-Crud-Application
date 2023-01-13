import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const PORT = 7000;
 const connect = async() => {
    try {
       await mongoose.connect (process.env.MONGO,()=>{
            console.log("database is connected !");
        });
    } catch (error) {
        throw error ;
    }
 }



mongoose.connection.on("disconnected",()=>{
    console.log("database is disconnected!");
});

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));  
app.use(cors());
app.use('/',Routes);


app.listen(PORT,()=>{
    connect();
    console.log( "Server is running !");
})