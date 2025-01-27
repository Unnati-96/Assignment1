import express from "express";
// import mongoose from "mongoose";
import { Mongodb } from "./config/mongodb.js";
import testRouter from "./routes/crud.route.js"
import createRouter from "./routes/crud.route.js"
import readRouter from "./routes/crud.route.js";
import  updateRouter  from "./routes/crud.route.js";
import getuserRouter from "./routes/crud.route.js";
import delRouter from "./routes/crud.route.js";
import aggregateRouter from "./routes/crud.route.js";

const app = express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
app.use(express.json());

await Mongodb();
// mongoose.connect("mongodb://localhost:27017/task1").then(()=>{
//     console.log("Connection Established!!");
// }).catch((err)=>{console.log(err)});
// mongoose.disconnect();
app.use('/task',testRouter);
app.use('/task',createRouter)
app.use('/task',readRouter);
app.use('/task',updateRouter);
app.use('/task',getuserRouter);
app.use('/task',delRouter);
app.use('/task',aggregateRouter);
