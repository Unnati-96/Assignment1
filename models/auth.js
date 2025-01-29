import mongoose from "mongoose";
 

const userSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required :true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true,
        unique:true
    }
});
const  authuser = mongoose.model("authuser",userSchema);
export default authuser;
