import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyUser =  (req,res,next)=>{
    const token = req.cookies.access_token;

    //for MobileAPPS
    // console.log(req.headers);
    // const value = req.headers["authorization"];
    //  // Check if Authorization header exists and starts with "Bearer "
    //  if (!value || !value.startsWith("Bearer ")) {
    //     return res.status(401).json({ message: "Authorization token missing or invalid" });
    // }
    // const token = value.split("Bearer ")[1];
    
    if(!token)
    {
      return  next(errorHandler(401,"Forbidden!"));
    }
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{  
        if(err) {return next(errorHandler(403,"Unauthorized!"))}
        req.user =user;   //sending  this user parameter as req.user inside next handler
        next(); //update
    })

}