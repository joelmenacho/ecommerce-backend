/*
 "productId": 1,
 "productName": "Producto 1",
 "productPrice": 100.00,
 "productDescription": "Descripción del producto 1",
 "productImage": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
 "productCategory": 0
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productId:{
        type:Number,
        required:true
    },
    productName:{
        type:String,
        required:true,
        minlength:2,
        maxlength:255
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDescription:{
        type:String,
        required:true,
        minlength:2
    },
    productImage:{
        type:String,
        required:true
    },
    productCategory:{
        type:Number,
        required:true
    }
},{
    timestamps:false,
    versionKey:false
})

module.exports = mongoose.model('products',ProductSchema);