//const { error } = require("console")
const express=require("express")
const routes=express.Router()
const Product=require('../models/product')
const Image=require("../models/image")
const ProductType=require("../models/type")
const Category=require("../models/category")
const multer = require("multer")
const fs=require("fs")
const app=express()



const cat_storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/category_images");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload_cat = multer({ storage: cat_storage });
  
  routes.post("/category", upload_cat.single("categoryImage"), (req, res) => {
    const saveImage =  Category({
      pname: req.body.pname,
      img: {
        data: fs.readFileSync("uploads/category_images/" + req.file.filename),
        contentType: "image/png",
      },
      description:req.body.description
    });
    saveImage
      .save()
      .then((res) => {
        console.log("category image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('category image is saved')
  });


  // product types upload

  
const type_storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/product_types");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload_type = multer({ storage: type_storage });

  routes.post("/types", upload_type.single("productTypeImage"), (req, res) => {
    const saveImage =  ProductType({
      pname: req.body.pname,
      img: {
        data: fs.readFileSync("uploads/product_types/" + req.file.filename),
        contentType: "image/png",
      },
      description:req.body.description,
      category_id:req.body.cat_id
    });
    saveImage
      .save()
      .then((res) => {
        console.log("type image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('type image is saved')
  });
  

// product upload

const product_storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploads/products");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload_product = multer({ storage: product_storage });

  routes.post("/products", upload_product.single("productImage"), (req, res) => {
    const saveImage =  Product({
      pname: req.body.pname,
      img: {
        data: fs.readFileSync("uploads/products/" + req.file.filename),
        contentType: "image/png",
      },
      description:req.body.description,
      price:req.body.price,
      rating:req.body.rating,
      product_type_id:req.body.type_id,
      category_id:req.body.cat_id,

    });
    saveImage
      .save()
      .then((res) => {
        console.log("product image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('product image is saved')
  });
  



//get category

routes.get("/category",async(req,res)=>{
  try{
  const category=await Category.find()
  res.send(category)
  }
  catch(err){
console.log(err)

  }
})













// routes.get('/',async(req,res)=>{
//     try{
//     const items= await Product.find();
   
//     res.send(items);
//     }
//     catch(err){
//         console.log(err)
//     }
// })

// routes.post('/',async(req,res)=>{
//     console.log(req.body)
//     try{
//         console.log(req.body)
//         const newTodo=await Product.insertMany(req.body);
//         res.send(newTodo);
//     }catch(err){
//         return res.status(500).json({
//             msg:"Internal server error"
//         })
//     }
// })

// routes.get("/get/images",async(req,res)=>{
//     try{
//     const data=await Image.find()
//     console.log(data)
//      res.send(data)
//     }
//     catch(err){
// console.log(err)
//     }
// })

 



module.exports=routes