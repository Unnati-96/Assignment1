import fs from "fs";
export const testHandler = (req,res,next)=>{
    console.log("Hello");
    // req.name ="USER!!",
   fs.appendFile("ind.txt", `${Date.now()} : ${req.method}:${req.path} \n`, (err,data)=>{
    if (err) {
        console.error("Error writing to file:", err);
        return res.status(500).json({ message: "Error writing log" }); // Handle the error properly
    }
    next();
   })


}