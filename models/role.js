const {  DataTypes, Sequelize }= require('sequelize');
const {sequelize}= require('../database/config');

const Role = sequelize.define(
    "roles",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        timestamps:false
    }
)

module.exports = Role;