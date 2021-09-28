   
const { Sequelize } = require ('sequelize')

const path = require("path");

const dpPath = path.join(__dirname, "dp.sqlite");

const sequelize = new Sequelize({
   dialect: "sqlite",
   storage: dpPath,

});

module.exports = sequelize;