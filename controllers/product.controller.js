const Category = require("../models/category");
const Merchant = require("../models/merchant");
const Product = require("../models/product")

const getAllProducts = async(req,res)=>{
    const storeId = req.params.id;
    const products = await Product.findAll({
        include:[
            {model: Category,where:{isActive:true}},
            {model: Merchant,where:{isActive:true}}
        ],
        where:{storeId,isActive:true}});
    res.json(products);
}

const getProductById = async(req,res)=>{
    const id = req.params.id;
    const product = await Product.findOne({ include:[
        {model: Category,where:{isActive:true}},
        {model: Merchant,where:{isActive:true}}
        ],where:{id,isActive:true}});
    res.json(product);
}
const saveProduct = async(req,res)=>{
    const body = req.body;
    const product = await Product.create(body);
    res.status(201).json(product);
}
const updatedProduct = async(req,res)=>{
    const id = req.params.id;
    const {storeId,barcode,isActive,...requestBody} = req.body;
    const [,product] = await Product.update(requestBody,{where:{id},returning:true});
    res.json(product[0]);
}
const deleteProduct= async(req,res)=>{
    const id = req.params.id;
    const product = await Product.update({isActive:false},{where:{id}});
    res.json(product);
}
const restoreProduct= async(req,res)=>{
    const id = req.params.id;
    const product = await Product.update({isActive:true},{where:{id}});
    res.json(product);
}

module.exports ={
    getAllProducts,
    getProductById,
    saveProduct,
    updatedProduct,
    deleteProduct,
    restoreProduct
}