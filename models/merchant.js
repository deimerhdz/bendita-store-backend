const {  DataTypes, Sequelize }= require('sequelize');
const {sequelize}= require('../database/config');
const Store = require('./store');

const Merchant = sequelize.define(
    "merchants",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phoneNumber:{
            field: 'phone_number',
            type:DataTypes.STRING,
            allowNull:true
        },
        storeId:{
            field:'store_id',
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
Store.hasMany(Merchant,{
    foreignKey: 'storeId'
  });
Merchant.belongsTo(Store);

module.exports = Merchant;