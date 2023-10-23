const {  DataTypes, Sequelize }= require('sequelize');
const {sequelize}= require('../database/config');

const Sale = sequelize.define(
    "sales",
    {
        total:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        storeId:{
            field:'store_id',
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        createdAt:{
            field:'created_at',
            type:DataTypes.DATE,
            allowNull:false
        }
    },
    {
        timestamps:true,
        updatedAt:false
    }
)

module.exports = Sale;