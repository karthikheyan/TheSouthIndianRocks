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

module.exports=routes