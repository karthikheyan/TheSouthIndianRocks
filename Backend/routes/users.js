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
routes.post("/signup",async(req,res)=>{
    try{
        const pwd=req.body.password;
        const hashedpwd=await bcrypt.hash(pwd,10);
        const { UserName,password,email,address,phone } = req.body;

  const newUser = new User({
    UserName,
    email,
    password:hashedpwd,
    address,
    phone
  })
  newUser.save()
  .then(() => {
    res.send("Newuser is created")
  })
  .catch((err) => {
    //console.log(err, "error has occur");
    res.send(err.message)
  });
 
    }
    catch(err){
        //console.log(err)
        res.send(err.message)
    }
})



//user log in

routes.post("/user/login",async(req,res)=>{

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