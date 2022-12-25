const productController = {}

const {config} = require('../config');

const productModel = requirerequire('../models/product.models')

productController.getAll= async (req, res)=>{
    const products = await productModel.find();
    res.json({
        succes:true,
        message:'los productos se han cargado correctamente',
        content:products

    })
}

module.exports = productController;
