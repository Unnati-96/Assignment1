export const addnew = async ()=>{
    try {
      const data = await user.updateMany({
        $or : [
         { favFruit:{$exists:false}},
         { gender:{$exists:false}}
       ] 
      },{
        $set: {
          favFruit:"apple",
          gender:"female"
        }
      });
      console.log("Done",data);
    } catch (err) {
      console.log(err)
    }
  }
  addnew()