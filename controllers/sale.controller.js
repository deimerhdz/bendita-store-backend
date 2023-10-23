const Sale = require("../models/sale");
const SaleDetail = require("../models/sale_detail");

const getAllSale = async(req,res)=>{
    const storeId = req.params.id;
    const sales = await Sale.findAll({include:[SaleDetail],where:{storeId}})
    res.json({sales})
}

const saveSale = async (req,res)=>{
    try {
        const {items,...sale } = req.body;
        const SaleDB = await Sale.create(sale);
        
        items.forEach(async(item) => {
            item.saleId = SaleDB.id;
            await SaleDetail.create(item);
        });
        res.json({
            SaleDB
        })
    } catch (error) {
        res.json({
            msg:'Error: the purchase order could not be processed',
            error
        })
    }
   
}

module.exports = {
    getAllSale,
    saveSale
}