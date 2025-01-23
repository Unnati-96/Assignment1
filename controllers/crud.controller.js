import user from "../models/crud.model.js"

export const test = (req,res)=>{
    res.send("Test Route is working")
}

export const createUser =async (req,res)=>{
    // const {id,name,age} = req.body;
   await user.create(req.body).then((user)=>{
        console.log(user);
        res.json(user)
    }).catch((err)=>{res.json(err)})
}

export const readUser = (req,res)=>{
 user.find({}).then((user)=>{
   res.json(user);
 }).catch((err)=>{
    res.json(err);
 })
}

export const updateUser = async (req,res)=>{
    const id = req.params.id;
  const updated= await  user.findByIdAndUpdate({_id:id},{id:req.body.id,name:req.body.name,age:req.body.age}, { new: true }).then((update)=>{
        res.json(update);
      console.log(update);
    }).catch((err)=>{
      res.json(err);
    })
}
export const getuser =async (req,res)=>{
    const id = req.params.id;
    // const {id,name } = req.params;
     const data = await user.findById({_id:id}).then((result)=>{
        res.json(result);
        // res.json({result:result,message:`Hello, ${name}`});
        // res.json({result:result,message:`Hello, ${result.name}`});
        console.log(result,`Hello,${result.name}`);
    }).catch((err)=>{
        res.json(err);
    })
}

export const delUser = async (req,res)=>{
    const id = req.params.id;
    await user.findByIdAndDelete({_id:id}).then((del)=>{
       res.json(del);
       console.log(del);
    }).catch((err)=>{
       res.json(err);
    })
}