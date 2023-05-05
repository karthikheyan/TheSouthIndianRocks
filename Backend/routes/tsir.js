//const { error } = require("console")
const express=require("express")
const routes=express.Router()
const Product=require('../models/product')
const Image=require("../models/image")
const ProductType=require("../models/type")
const Category=require("../models/category")
const multer = require("multer")
const fs=require("fs")
const { log } = require("console")
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
      cname: req.body.cname,
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

  routes.post("/types", upload_type.single("productTypeImage"), async(req, res) => {
    try{
    const category=req.body.category;
    console.log(category);
    const cat=await Category.find({cname:category})
    const id=cat[0].id
    console.log(id);
    const saveImage =  ProductType({
      tname: req.body.tname,
      img: {
        data: fs.readFileSync("uploads/product_types/" + req.file.filename),
        contentType: "image/png",
      },
      description:req.body.description,
      category_id:id
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
    }
    catch(err){
      console.log(err)
              res.send(412)
    }
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

  routes.post("/products", upload_product.single("productImage"),async (req, res) => {
    try{
    const category=req.body.category;
    console.log(category);
    const cat=await Category.find({cname:category})
    const c_id=cat[0].id
    console.log("dsd"+c_id);


    const product=req.body.type
    const pro=await ProductType.find({tname:product})
    const p_id=pro[0].id;
    console.log(p_id)




    const saveImage =  Product({
      pname: req.body.pname,
      img: {
        data: fs.readFileSync("uploads/products/" + req.file.filename),
        contentType: "image/png",
      },
      description:req.body.description,
      price:req.body.price,
      rating:req.body.rating,
      product_type_id:p_id,
      category_id:c_id,

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

    }
    catch(err){
      console.log(err)
      res.send(412)
    }
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


//get types acccording to category

routes.get("/category/type/:category",async(req,res)=>{
    try{
        const category= await Category.find({cname:req.params.category})
        const types= await ProductType.find({category_id:category[0].id})
        res.send(types)
    }
    catch(err){
      res.sendStatus(412)
    }
})


//get products according to types


routes.get("/category/product/:type",async(req,res)=>{
  console.log(req.params.type)
  try{
    const type=await ProductType.find({tname:req.params.type})
    const products= await Product.find({product_type_id:type[0].id})
    res.send(products)
  }
  catch(err){
    res.sendStatus(412)
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