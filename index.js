import express from "express";
import mongoose from "mongoose";
import testRouter from "./routes/crud.route.js"
import createRouter from "./routes/crud.route.js"
const app = express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000!!");
});
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/task1").then(()=>{
    console.log("Connection Established!!");
}).catch((err)=>{console.log(err)});

app.use('/task',testRouter);
app.use('/task',createRouter)
