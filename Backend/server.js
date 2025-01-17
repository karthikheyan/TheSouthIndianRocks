const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require("dotenv")
const bodyParser = require("body-parser");
const cors=require("cors")
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json())
dotenv.config()
app.use(cors())


mongoose.connect(process.env.MONGODB_URI).then(()=>{
    
    console.log("Db connected")
}).catch((err)=>{console.log(err)})

app.use('/uploads/product_types', express.static('uploads/product_types'));
app.use('/uploads/category_images', express.static('uploads/category_images'));
app.use('/uploads/gallery_images', express.static('uploads/gallery_images'));
app.use('/uploads/products', express.static('uploads/products'));

app.use('/tsir',require("./routes/tsir.js"))
app.use('/tsir/users',require("./routes/users.js"))
app.use('/tsir/purchase',require("./routes/purchase.js"))
app.use('/tsir/gallery',require("./routes/gallery.js"))

app.listen(3000,()=>{
    console.log("connected")
})




