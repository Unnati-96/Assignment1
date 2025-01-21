import express from "express";
import testRouter from "./routes/crud.route.js"
const app = express();
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

app.use('/task',testRouter);