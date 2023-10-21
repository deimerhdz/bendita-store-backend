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

module.exports = {
    existEmail,
    existUserById,
    existStoreById
}