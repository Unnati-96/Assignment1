import authuser from "../models/auth.js";

export const signupUser = async (req,res,next)=>{
  try {
  const data = await authuser.create(req.body);
  res.status(201).json(data);
    
  } catch (error) {
    next(error);
  }
}