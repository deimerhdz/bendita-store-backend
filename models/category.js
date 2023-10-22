const {  DataTypes, Sequelize }= require('sequelize');
const {sequelize}= require('../database/config');

const Category = sequelize.define(
    "categories",
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        categoryId:{
            field:'category_parent',
            type:DataTypes.NUMBER,
            allowNull:true
        },
        storeId:{
            field:'store_id',
            type: DataTypes.NUMBER,
            allowNull:false
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
Category.hasMany(Category,{
    foreignKey: 'categoryId',
    as: 'SubCategories'
});


module.exports = Category;