const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Menus extends Model {}

Menus.init(
    {
        Title: DataTypes.STRING,
    },


    {
        sequelize,
        modelName: "menus",      
        timestamps: false,
    }
);

module.exports = Menus;