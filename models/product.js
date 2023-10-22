const {  DataTypes, Sequelize }= require('sequelize');
const {sequelize}= require('../database/config');
const Category = require('./category');
const Merchant = require('./merchant');
const Store = require('./store');

const Product = sequelize.define(
    "products",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        barcode:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        price:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            unique:true
        },
        cost:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
            unique:true
        },
        stock:{
            type: DataTypes.NUMBER,
            defaultValue:0
        },
        size:{
            type:DataTypes.STRING,
            allowNull:true
        },
        storeId:{
            field:'store_id',
            type: DataTypes.NUMBER
        },
        categoryId:{
            field:'category_id',
            type: DataTypes.NUMBER
        },
        merchantId:{
            field:'merchant_id',
            type: DataTypes.NUMBER
        },
        isActive:{
            field: 'is_active',
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true
        },
        createdAt: {
            field: 'created_at',
            type: Sequelize.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: Sequelize.DATE,
        },
    },
    {
        timestamps:true
    }
)

//store association
Store.hasMany(Product,{
    foreignKey: 'storeId'
  });
Product.belongsTo(Store);
//category association
Category.hasMany(Product,{
    foreignKey: 'categoryId'
  });
Product.belongsTo(Category);
//merchant asocciation
Merchant.hasMany(Product,{
    foreignKey: 'merchant_id'
  });
Product.belongsTo(Merchant);
module.exports = Product;