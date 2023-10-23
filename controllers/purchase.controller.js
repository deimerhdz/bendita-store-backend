const Purchase = require("../models/purchase");
const PurchaseDetail = require("../models/purchase_detail");

const getAllPurchase = async(req,res)=>{
    const storeId = req.params.id;
    const purchases = await Purchase.findAll({include:[PurchaseDetail],where:{storeId}})
    res.json({purchases})
}

const savePurchase = async (req,res)=>{
    try {
        const {items,...purchase } = req.body;
        const purchaseDB = await Purchase.create(purchase);
        items.forEach(async(item) => {
            item.purchaseId = purchaseDB.id;
            await PurchaseDetail.create(item);
        });
        res.json({
            purchaseDB
        })
    } catch (error) {
        res.json({
            msg:'Error: the purchase order could not be processed',
            error
        })
    }
   
}

module.exports = {
    getAllPurchase,
    savePurchase
}