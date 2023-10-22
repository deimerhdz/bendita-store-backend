const Merchant = require("../models/merchant")

const getAllMerchants = async(req,res)=>{
    const storeId = req.params.id;
    const merchants = await Merchant.findAll({where:{storeId,isActive:true}})
    res.json(merchants);
}
const getMerchantById =async(req,res)=>{
    const id = req.params.id;
    const store = await Merchant.findOne({where:{id}});
    res.json(store);
}
const saveMerchant =async(req,res)=>{
    const body = req.body;
    body.name =body.name.toUpperCase();
    const merchant = await Merchant.create(body);
    res.status(201).json(merchant);
}
const updateMerchant =async(req,res)=>{
    const id = req.params.id;
    const {storeId,isActive,...requestBody} = req.body;

    const [,merchant] = await Merchant.update(requestBody,{where:{id},returning:true});
    res.json(merchant[0]);
}
const deleteMerchant = async(req,res)=>{
    const id = req.params.id;
    const merchant = await Merchant.update({isActive:false},{where:{id}});
    res.json(merchant);
}

const restoreMerchant = async(req,res)=>{
    const id = req.params.id;
    const merchant = await Merchant.update({isActive:true},{where:{id}});
    res.json(merchant);
}
module.exports = {
    getAllMerchants,
    saveMerchant,
    getMerchantById,
    updateMerchant,
    deleteMerchant,
    restoreMerchant
}