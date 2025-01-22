import user from "../models/crud.model.js"

export const test = (req,res)=>{
    res.send("Test Route is working")
}

export const createUser = (req,res)=>{
    const {id,name,age} = req.body;
    user.create(req.body).then((user)=>{
        res.json(user)
    }).catch((err)=>{res.json(err)})
}