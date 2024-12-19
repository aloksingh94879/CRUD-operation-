const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})


// users here is the collection name in the database alokcrud which i hav created


const userModel=mongoose.model("users",userSchema)

module.exports=userModel