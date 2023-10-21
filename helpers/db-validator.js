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
        throw new Error(`The id does not exists`)
    }
}

module.exports = {
    existEmail,
    existUserById
}