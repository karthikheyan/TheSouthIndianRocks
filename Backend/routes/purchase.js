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

//request to add product to cart
routes.post('/addtocart/:uid/:pid',async(req,res)=>{
    try{
        const user_id=req.params.uid
        const product_id=req.params.pid
        const find = await User.findById(user_id)
        const cartarr = find.cart
        if(cartarr.includes(product_id))
        {
            return res.status(409).json({error: "Item is already added"})
        }
        else{

            const user = await User.findByIdAndUpdate(user_id,{$push:{cart:product_id}},{new:true})
            if(user){
                    console.log("User's cart array updated successfully")
                     res.status(200).json({message: "item added to cart"})
                } else {
                    res.status(404)
                  
              }
        }
    }

    catch(err){
        console.log(err)
        res.status(404).send(err)
    }
})


//to provide cart products
routes.get("/cart/:uid",async(req,res)=>{
    try{
           const user=await User.find({"_id":req.params.uid})
           const product_array=user[0].cart;
           const id_array=[];
          
           for (const id of product_array) {
                  const product_details = await Product.findOne({ "_id": id });
                  id_array.push(product_details);
           }
            res.send(id_array)
}
    catch(err){
        console.log(err);
      res.send(err)
    }
})


//to remove item from cart

routes.patch("/cart/remove/:uid",async(req,res)=>{
      try{
            const productIds = req.body.productIds;
            const user = await User.findById(req.params.uid)
            if(!user) return res.status(404).json({error:"user not found"})
            user.cart = await user.cart.filter(productId => !productIds.includes(productId));
            await user.save();
            res.status(200).send(user.cart)
       
      }catch(err){
             console.log(err);
             res.send(err)
      }
})


//Update user after purchasing the products

module.exports=routes