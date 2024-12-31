<<<<<<< HEAD
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const UserModel=mongoose.model("user",userSchema);
=======
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const UserModel=mongoose.model("user",userSchema);
>>>>>>> f10807c (Intial commit)
module.exports=UserModel;