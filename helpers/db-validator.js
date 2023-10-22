const Category = require("../models/category");
const Merchant = require("../models/merchant");
const Store = require("../models/store");
const User = require("../models/user");

const existEmail = async (email='')=>{
    const existeEmail = await User.findOne({where:{email}});
    if(existeEmail){
        throw new Error(`Email is already exists`)
    }
}

const existUserById = async (id='')=>{
    const existUser = await User.findByPk(id);
    if(!existUser){
        throw new Error(`The user id does not exists`)
    }
}

const existStoreById = async (id='')=>{
    const existStore = await Store.findByPk(id);
    if(!existStore){
        throw new Error(`The store id does not exists`)
    }
}
const existMerchant = async (name='')=>{
    const existeMerchant = await Merchant.findOne({where:{name}});
    if(existeMerchant){
        throw new Error(`Merchant is already exists`)
    }
}
const existMerchantById = async (id='')=>{
    const existeMerchant = await Merchant.findByPk(id);
    if(!existeMerchant){
        throw new Error(`The merchant id does not exists`)
    }
}


const existCategory = async (name='')=>{
    const existeCategory = await Category.findOne({where:{name}});
    if(existeCategory){
        throw new Error(`Merchant is already exists`)
    }
}
const existCategoryById = async (id='')=>{
    const existeCategory = await Category.findByPk(id);
    if(!existeCategory){
        throw new Error(`The category id does not exists`)
    }
}
module.exports = {
    existEmail,
    existUserById,
    existStoreById,
    existMerchant,
    existCategoryById,
    existMerchantById,
    existCategory
}