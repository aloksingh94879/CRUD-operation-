const express=require('express')
const  mongoose = require('mongoose')
const cors=require('cors')

// this is schema from models
const userModel=require('./models/models')

const app=express()

// to access server side on frontend
app.use(cors())

// pass data from frontend to backend in json format
app.use(express.json())

// pass data from front end to backend but in a normal way
// app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/alokcrud")

// api to create a new record
// req id data what we wil send fro  rontend and res back to frontend
app.post("/createUser",(req,res)=>{
    // console.log(req.body);
    userModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get("/",(req,res)=>{
    // console.log(req.body);
    userModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    userModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    // _id:id
    userModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

// to run or server
app.listen(3002,()=>{
    console.log("server is running")
})