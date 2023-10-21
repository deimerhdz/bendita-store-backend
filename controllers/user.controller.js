const Role = require("../models/role");
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const getAllUsers = async(req,res)=>{
    const users= await User.findAll({
            include: Role ,
            attributes: ['id', 'name','lastname','phoneNumber','gender','email','createdAt','updatedAt','roleId'],
            where:{isActive:true}
        });
    
    res.json(users);
}

const getUserById = async(req,res)=>{
    const id = req.params.id;
    const user = await User.findByPk(id);
    res.json(user);
}

const saveUser = async(req,res)=>{
    const body = req.body;
    body.email = body.email.toLowerCase();

    const salt = bcrypt.genSaltSync(10);
    body.password = bcrypt.hashSync(body.password,salt);

    const userDB = await User.create(body)
    res.status(201).json(userDB);
}

const updateUser = async(req,res)=>{
    const id = req.params.id;
    const {password,email,isActive,...requestBody} = req.body;
    const user = await User.update(requestBody,{where:{id},returning:true});
    res.json(user[0]);
}

const deleteUser = async(req,res)=>{
    const id = req.params.id;
    const user = await User.update({isActive:false},{where:{id}});
    res.json(user);
}

const restoreUser = async(req,res)=>{
    const id = req.params.id;
    const user = await User.update({isActive:true},{where:{id}});
    res.json(user);
}
module.exports = {
    getAllUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser,
    restoreUser
}