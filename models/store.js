const {  DataTypes, Sequelize }= require('sequelize');
const {sequelize}= require('../database/config');
const User = require('./user');

const Store = sequelize.define(
    "stores",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        image:{
            field:'logo',
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        phoneNumber:{
            field: 'phone_number',
            type:DataTypes.STRING,
            allowNull:true
        },
        userId:{
            field:'user_id',
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
User.hasOne(Store,{
    foreignKey: 'userId'
  });
Store.belongsTo(User);

module.exports = Store;