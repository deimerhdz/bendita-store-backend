const Store = require("../models/store");

const getAllStores =async(req,res)=>{
    const stores= await Store.findAll({
        where:{isActive:true}
    });

res.json(stores);
}
const getStoreById =async(req,res)=>{
    const id = req.params.id;
    const store = await Store.findByPk(id);
    res.json(store);
}
const getStoreByUserId =async(req,res)=>{
    const id = req.params.id;
    const store = await Store.findOne({where:{userId:id}});
    res.json(store);
}
const saveStore =async(req,res)=>{
    const body = req.body;
    const store = await Store.create(body);
    res.status(201).json(store);
}
const updateStore =async(req,res)=>{
    const id = req.params.id;
    const {userId,isActive,...requestBody} = req.body;

    const [,stores] = await Store.update(requestBody,{where:{id},returning:true});
    res.json(stores[0]);
}
const deleteStore = async(req,res)=>{
    const id = req.params.id;
    const store = await Store.update({isActive:false},{where:{id}});
    res.json(store);
}

const restoreStore = async(req,res)=>{
    const id = req.params.id;
    const store = await Store.update({isActive:true},{where:{id}});
    res.json(store);
}

module.exports ={
    getAllStores,
    getStoreById,
    deleteStore,
    updateStore,
    saveStore,
    restoreStore,
    getStoreByUserId
}