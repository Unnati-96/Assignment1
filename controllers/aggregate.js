import user from "../models/crud.model.js";


export const getAgeCount= async (req,res)=>{   //using $match operator
    const {num} = req.params;
try {
  const data = await user.aggregate([{
    $match:{age:Number(num)}
    // $match:{hobbies:"m"}
  },
{
  $count : `age${num}`
// $count: "hobbbies_m"
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
                fruitsCount: -1
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


  export const avgHobbies = async (req,res)=>{  //What is the avg no. of hobbies per user
   
   try {
    const data = await user.aggregate([
    //    { $unwind:"$hobbies"},
    //    {$group:
    //     {
    //         _id:"$_id",
    //         counthobbies:
    //         {
    //             $sum:1
    //         }
    //     }
    //    },
    //    {
    //     $group:{
    //         _id:null,
    //         avghobbies:
    //         {
    //    $avg: "$counthobbies"
    //         }
    //     }
    //    }
    {
        $addFields:
        {
            avghobbies : {
                $size : {$ifNull :["$hobbies",[]]}
            }
        },
    },
    {
        $group:
        {
            _id:null,
            avgNoHobbies:
            {
                $avg: "$avghobbies"
            }
        }
    }
       ]);
       res.status(200).json(data);
   } catch (error) {
    res.status(500).json({message:"Error fetching top fruits",error:err.message})
    
   }
  }
  
  export const bothcondns = async (req,res)=>{
   
    try {
        const data = await user.aggregate([
            {
                // $match:{hobbies:"m", favFruit:"apple"}  //users who have "m" as their hobby and apple as favFruit
                $match:{email:/@gmail\.com$/}    //how many users have "@gmail" intheir email?
            },
            {
                // $project:{
                //     name:1,
                //     age:1
                // }
                $count:"userswith@gmail"
            }
        ]);
        res.status(200).json(data); 
    } catch (err) {
        res.status(500).json({error:err.message});  
        
    }
  }

//   export const categorized = async(req,res)=>{  //categorize users based on their favFruit.
//     try {
//         const data = await user.aggregate([
//          {$group:{
//             _id: "$favFruit",
//             users:
//             {
//             $push:"$name"
//             }
//          }}
//         ]);
//         res.status(200).json(data); 

//     } catch (err) {
//         res.status(500).json({error:err.message});  
        
//     }
//   }

//   export const categorized = async(req,res)=>{  //How many users have "n" as their sec hobby int the list
//     try {
//         const data = await user.aggregate([
//         {$match:{"hobbies.1":"n"}},
//         {$count:"SecHobby"}
//         ]);
//         res.status(200).json(data); 

//     } catch (err) {
//         res.status(500).json({error:err.message});  
        
//     }
//   }


export const categorized = async(req,res)=>{  //Find users who have both "m" and "d" as their hobby
    try {
        const data = await user.aggregate([
       {$match:{hobbies:{
        $all : ["m","d"]
       }}},
       {
        $count:"num"
       }
        ]);
        res.status(200).json(data); 

    } catch (err) {
        res.status(500).json({error:err.message});  
        
    }
  }