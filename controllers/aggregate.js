import user from "../models/crud.model.js";


export const getAgeCount= async (req,res)=>{   //using $match operator
    const {num} = req.params;
try {
  const data = await user.aggregate([{
    $match:{age:Number(num)}
  },
{
  $count : `age${num}`
}]);
if(data.length ===0)
{
   return res.status(404).json({message:"User doesn't exist!!"})
}
return res.status(200).json(data);
} catch (err) {
  return res.status(500).json({message:"Error aggregating users",error:err.message})
}
}



export const getAvgAge = async (req,res)=>{
    try {
      const data =await user.aggregate([
        {
          $group: {
            _id:null,
            averageAge: {
              $avg : "$age",
            }
          }
        }
      ]);
           //for total no. males and females
         // {
            //     $group: {
            //         _id:"$gender",
            //        genderCount:
            //        {
            //          $sum :1
            //        }
            //     }
            // }
  res.status(200).json(data);
  
    } catch (err) {
    res.status(500).json({message:"Error aggregating users",error:err.message})
    }
  }

  export const topFruits =  async (req,res)=>{
    try {
        const data =await user.aggregate([
            //For unique favFruits
            // {
            //     $group:{
            //         _id:"$favFruit",
            //     }
            // }
            
            {   //top favfruits
                $group:{
                    _id:"$favFruit",
                    fruitsCount:
                    {
                        $sum : 1
                    }
                }, 
            },
            {
             $sort:{
                count: -1
             }
            },
            {
                $limit : 2
            }
         

        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({message:"Error fetching top fruits",error:err.message})
    }
  }