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
const Purchase = require("../models/purchased")
const purchased = require("../models/purchased")



routes.get('/product/:id',async(req,res)=>{
    try{
        const purchased=await Product.find({_id:req.params.id});
        console.log(purchased)
        res.send("success")
    }
    catch(err){
        console.log(err);
    }
})


routes.post('/addtocart/:uid/:pid',async(req,res)=>{
    try{
        const user_id=req.params.uid
        const product_id=req.params.pid
        const user=await User.findByIdAndUpdate(user_id,{$push:{cart:product_id}},{new:true})
        if(user){

                console.log("User's cart array updated successfully")
                 res.status(200)
            } else {
                res.status(404)
              
          }
          res.send("ok")
    }

    catch(err){
        console.log(err)
        res.status(400)
    }
})



routes.get("/cart/:uid",async(req,res)=>{
    try{
             
    }
    catch(err){

    }
})

module.exports=routes