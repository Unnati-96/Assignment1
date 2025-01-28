import user from "../models/crud.model.js";
export const addnew = async ()=>{
    try {
      const data = await user.updateMany({
        $or : [
         { favFruit:{$exists:false}},
         { gender:{$exists:false}},
         {hobbies:{$exists:false}},{ hobbies: { $eq: [] } },
         { hobbies: { $eq: null }}
       ] 
      },{
        $set: {
          favFruit:"apple",
          gender:"female",
          hobbies:["a","b","c","d","e"]
        }
      });
      console.log("Done",data);
    } catch (err) {
      console.log(err)
    }
  }
  addnew()