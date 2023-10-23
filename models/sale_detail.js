const {  DataTypes }= require('sequelize');
const {sequelize}= require('../database/config');
const Product = require('./product');
const Sale = require('./sale');

const SaleDetail = sequelize.define(
    "sale_details",
    {
        saleId:{
            field:'sale_id',
            type:DataTypes.NUMBER,
            allowNull:false
        },
        unitCost:{
            field:'unit_cost',
            type:DataTypes.NUMBER,
            allowNull:false
        },
        unitPrice:{
            field:'unit_price',
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
Sale.hasMany(SaleDetail,{
    foreignKey: 'saleId'
  });
SaleDetail.belongsTo(Sale);

//Product association
Product.hasMany(SaleDetail,{
    foreignKey: 'productId'
  });
SaleDetail.belongsTo(Product);

module.exports = SaleDetail;