const {  DataTypes, Sequelize }= require('sequelize');
const {sequelize}= require('../database/config');
const Purchase = require('./purchase');
const Product = require('./product');

const PurchaseDetail = sequelize.define(
    "purchase_detail",
    {
        purchaseId:{
            field:'purchase_id',
            type:DataTypes.NUMBER,
            allowNull:false
        },
        unitCost:{
            field:'unit_cost',
            type:DataTypes.NUMBER,
            allowNull:false
        },
        quantity:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        productId:{
            field:'product_id',
            type:DataTypes.NUMBER,
            allowNull:false
        }
    },
    {
        timestamps:false,
      
    }
)
//purchase association
Purchase.hasMany(PurchaseDetail,{
    foreignKey: 'purchaseId'
  });
PurchaseDetail.belongsTo(Purchase);

//Product association
Product.hasMany(PurchaseDetail,{
    foreignKey: 'productId'
  });
PurchaseDetail.belongsTo(Product);

module.exports = PurchaseDetail;