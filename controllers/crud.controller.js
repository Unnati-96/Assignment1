import mongoose from "mongoose"
import user from "../models/crud.model.js"

export const test = (req,res)=>{
    res.send("Test Route is working")
}


export const createUser =async (req,res)=>{
    try{
    const data = await user.create(req.body);
    res.status(201).json(data);
    console.log(data);   
    }
    catch(err){
      res.status(500).json({message:"Error creating user ",error:err});
      console.log(err);  
    }
}

export const readUser =async (req,res)=>{
 try {
const data= await user.find({});
    res.status(200).json(data);
 } catch (error) {
  res.status(500).json({message:"Error fetching users",err: error.message});
 }
 
}

export const updateUser = async (req,res)=>{
  const id = req.params.id;

try {
  
  const updated= await  user.findByIdAndUpdate({_id:id},{id:req.body.id,name:req.body.name,age:req.body.age,email:req.body.email,favFruit:req.body.favFruit,gender:req.body.gender}, { new: true });
  if(!updated)
  {
    res.status(404).json({error:"User does not exist!"});
  }
    res.status(200).json(updated);
  console.log(updated);
} catch (err) {
  res.status(500).json({message:"Error updating user",error:err});
  
}
}





//Search Functionality with req.query
export const getuser = async (req,res)=>
{ 
  // const {name,age} = req.query;
  const {_id,id,name,age,email} = req.query;
  let Filter = {};
  if (_id && _id.trim() !== "") {
  if(mongoose.Types.ObjectId.isValid(_id))
  {
    Filter._id = new mongoose.Types.ObjectId(_id);
  }
  else
  {
    return res.status(400).json({message:"Invalid _id format!!"});
  }
}
  if(id && id.trim() !== "")
  {
    const parsedId = Number(id);
    if(isNaN(parsedId))
    {
     return res.status(400).json({message:"Invalid id format!!"});
    }
    Filter.id = parsedId;
  }
  if(name && name.trim() !== "")
  {
    Filter.name = { $regex: name, $options: 'i' }; //search even for substring
    // Filter.name = name;
  }
  if(age && age.trim() !== "")
  {
    const parsedAge = Number(age);
    if(isNaN(parsedAge))
    {
     return res.status(400).json({message:"Invalid age format!"})
    }
    Filter.age = parsedAge;
  }
if(email && email.trim() !== "")
{
  Filter.email = {$regex:email,$options:'i'};
}


if(Object.keys(Filter).length ===0)   
{
 return res.status(400).json({message:"Please provide filters for search!"});
}

  try {
    const data = await user.find(Filter);
    if(data.length ===0)
    {
    return  res.status(404).json({message:"User not found!"})
    } 
    console.log(data);
   return  res.status(200).json(data);
    
  } catch (err) {
    return res.status(500).json({message:"Error fetching user",error:err.message});
  }
}


//search using req.params
// export const getuser =async (req,res)=>{
//   const {name,age} = req.params;
//   console.log(req.params);
 
//   let filterObj = {};

//     if(name && name.trim() !=="")
//     {
//       filterObj.name = name;
//     }
//     if(age && age.trim() !=="")
//     {
//     const parsedAge = Number(age);
//       filterObj.age=parsedAge;
//     }
//     const data = await user.find(filterObj).then((result)=>{
      
//       res.json(result);
      
//   }).catch((err)=>{
//       res.json(err);
//   })
// }

// export const getuser =async (req,res)=>{
//     const {name} = req.params;
//     // const {id,name } = req.params;
//       const data = await user.find({name}).then((result)=>{
//         res.json(result);
//         // res.json({result:result,message:`Hello, ${name}`});
//         console.log(result,`Hello,${name}`);
//     }).catch((err)=>{
//         res.json(err);
//     })
// }

// export const getuser = async (req,res)=>{
//   const id = req.params.id;
//  const data =  await user.findById({_id:id}).then((reslt)=>{
//   // res.json(reslt);
//   res.json({result:reslt,message:`Hello, ${reslt.name}`});
// console.log(reslt,`Hello,${reslt.name}`);
//   // console.log(reslt);
//  }).catch((err)=>{
//   res.json(err);
//   console.log(err);
//  })
// }

export const delUser = async (req,res)=>{
  const id = req.params.id;
  try {
   const data= await user.findByIdAndDelete({_id:id});
   if(!data)
   {
    res.status(404).json({message:"User not found!"})
   }
    res.status(200).json(data);
    console.log(data);
  } catch (err) {
    res.status(500).json({message:"Error deleting user", error:err.message});
  }
   
}


