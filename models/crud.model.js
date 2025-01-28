import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required : true
    },
    age:{
   type:Number,
   required: true
    },
    email:
    {
        type:String,
        required:false,
        match: [/^\S+@\S+\.\S+$/]
    },
    favFruit:
    {
        type:String,
        required:true,
        default:"apple",
    },
    gender :
    {
        type:String,
        required:true,
        default:"Female"
    },
    hobbies:
    {
       type:Array,
       required:true,
       default:[]
    }

});

const User = mongoose.model("user",userSchema);
export default User;