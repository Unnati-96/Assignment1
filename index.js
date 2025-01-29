import express from "express";
// import mongoose from "mongoose";
// import { addnew } from "./Services/userService.js";
import { Mongodb } from "./config/mongodb.js";
import testRouter from "./routes/crud.route.js"
import createRouter from "./routes/crud.route.js"
import readRouter from "./routes/crud.route.js";
import  updateRouter  from "./routes/crud.route.js";
import getuserRouter from "./routes/crud.route.js";
import delRouter from "./routes/crud.route.js";
import countRouter from "./routes/aggregate.js";
import avgRouter from "./routes/aggregate.js";
import topFruitRouter from "./routes/aggregate.js"
import avgHobbiesRouter from "./routes/aggregate.js";
import bothcondnsRouter from "./routes/aggregate.js";
import  categorizedRouter  from "./routes/aggregate.js";
import signupRouter from "./routes/auth.js";


const app = express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    // addnew();
});
app.use(express.json());

await Mongodb();
// mongoose.connect("mongodb://localhost:27017/task1").then(()=>{
//     console.log("Connection Established!!");
// }).catch((err)=>{console.log(err)});
// mongoose.disconnect();
app.use('/task/crud',testRouter);
app.use('/task/crud',createRouter)
app.use('/task/crud',readRouter);
app.use('/task/crud',updateRouter);
app.use('/task/crud',getuserRouter);
app.use('/task/crud',delRouter);

app.use('/task/aggregate',countRouter);
app.use('/task/aggregate',avgRouter);
app.use('/task/aggregate',topFruitRouter);
app.use('/task/aggregate',avgHobbiesRouter);
app.use('/task/aggregate',bothcondnsRouter);
app.use('/task/aggregate',categorizedRouter)

app.use('/task/auth',signupRouter);

//Global ErrorHandler middleware
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error!";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })

})