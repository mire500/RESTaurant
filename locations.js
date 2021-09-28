const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Locations extends Model {}

Locations.init(
    {
        name:DataTypes.STRING,
        capacity: DataTypes.INTEGER,
        manager: DataTypes.STRING,
    
    },


    {
        sequelize,
        modelName: "locations",      
        timestamps: false,
    }
);



module.exports = Locations;