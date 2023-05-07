const express=require("express")
const routes=express.Router()
const Product=require('../models/product')
const Image=require("../models/image")
const ProductType=require("../models/type")
const Category=require("../models/category")
const multer = require("multer")
const fs=require("fs")
const { log } = require("console")
const User = require("../models/users")
const app=express()
const bcrypt=require("bcrypt")
const { json } = require("body-parser")




//create new user
routes.post("/user/signup",async(req,res)=>{
    console.log(req.body)
    try{
        const pwd=req.body.password;
        const hashedpwd=await bcrypt.hash(pwd,10);
        const { UserName,password,email,address } = req.body;

  const newUser = new User({
    UserName,
    email,
    password:hashedpwd,
    address
  })
  newUser.save()
  .then((res) => {
    //console.log("Newuser is created");
  })
  .catch((err) => {
    console.log(err, "error has occur");
  });
  res.send("Newuser is created")
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
})



//user log in

routes.post("/login",async(req,res)=>{

try{
  const { UserName,password}=req.body;
  console.log(password);
  if(!UserName || !password){
    return res.status(400).json({ 'message': 'Username and password are required.' })
  }

  const foundUser = await User.findOne({UserName:UserName})
    console.log(typeof(foundUser.password))
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        // create JWTs
        //localStorage.setItem("UserData",JSON.stringify(foundUser));
        res.send(foundUser);
    } else {
        res.sendStatus(401);
    }

}
catch(err){
console.log(err);
}
})




module.exports=routes