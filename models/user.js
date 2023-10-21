const {  DataTypes, Sequelize }= require('sequelize');
const {sequelize}= require('../database/config');
const Role = require('./role');

const User = sequelize.define(
    "users",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phoneNumber:{
            field: 'phone_number',
            type:DataTypes.STRING,
            allowNull:true
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false
        },
        roleId:{
            field:'role_id',
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
Role.hasOne(User,{
    foreignKey: 'roleId'
  });
User.belongsTo(Role, );

module.exports = User;