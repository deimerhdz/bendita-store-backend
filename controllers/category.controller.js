const Category = require("../models/category")

const getAllCategories = async(req,res)=>{
    const storeId = req.params.id;
    const categories = await Category.findAll({where:{storeId,isActive:true}});
    res.json(categories);
}
const getCategoryById = async(req,res)=>{
    const id = req.params.id;
    const category = await Category.findOne({include:[{model: Category,where:{isActive:true}, as: 'SubCategories'}],where:{id}});
    res.json(category);
}

const saveCategory = async (req,res)=>{
    const body = req.body;
    body.name = body.name.toUpperCase();
    const category = await Category.create(body);
    res.status(201).json(category);
}
const updateCategory = async (req,res)=>{
    const id = req.params.id;
    const {storeId,isActive,...requestBody} = req.body;
    const [,categories] = await Category.update(requestBody,{where:{id},returning:true});
    res.json(categories[0]);
}
const deleteCategory = async(req,res)=>{
    const id = req.params.id;
    const category = await Category.update({isActive:false},{where:{id}});
    res.json(category);
}
const restoreCategory = async (req,res)=>{
    const id = req.params.id;
    const category = await Category.update({isActive:true},{where:{id}});
    res.json(category);
}
module.exports = {
    getAllCategories,
    getCategoryById,
    saveCategory,
    deleteCategory,
    restoreCategory,
    updateCategory
}