import authuser from "../models/auth.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signupUser = async (req,res,next)=>{
    const {name,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10); //hash(Sync) so we dont have to use await here 
    // req.body.password = hashedPassword;
    const newAuthUser = new authuser({name,email,password:hashedPassword});
  try {
//   const data = await authuser.create(req.body);
 await newAuthUser.save();
  res.status(201).json("User created succcessfully!");
    
  } catch (error) {
    next(error);
  }
}

export const signinUser = async (req,res,next)=>{
const {email,password} = req.body;
try {
    const validUser = await authuser.findOne({email});
    if(!validUser)
    {
        return next(errorHandler(404,"User not foound!!"));
    }
    const validPassword = bcryptjs.compareSync(password,validUser.password);
    if(!validPassword)
    {
       return  next(errorHandler(401,"Wrong Credentials!!"));
    }
    //authentication
    const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET); //token created for authentication
    const {password:pass,...rest} = validUser._doc;  //valid user obj and _doc one of the key of this obj
    res.cookie("access_token",token,{httpOnly:true,secure:true}).status(200).json(rest);                                                                     //saving token as cookie
//    res.json({token});

} catch (error) {
    next(error);
}
}

export const authUpdate = async (req,res,next)=>{
    if(req.user.id !== req.params.id)
    {
        return next(errorHandler(403,"Unauthorized!"));
    }
    try {
        if(req.body.password)
        {
            req.body.password = bcryptjs.hashSync(req.body.password,10);
        }
     const updated =  await authuser.findByIdAndUpdate(req.user.id,{
        $set:
        {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        }
     },{new:true}
       
     );
     const {password:pass,...rest} = updated._doc;
    return res.status(200).json(rest);
        
    } catch (error) {
        next(error);
    }
} 