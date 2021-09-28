const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class 
Companies extends Model {}


Companies.init(
    {
        name: DataTypes.STRING,
        logoUrl: DataTypes.STRING,
    },


    {
        sequelize,
        modelName: "companies",      
        timestamps: false,
    }
);





module.exports = Companies;