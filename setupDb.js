
const sequelize = require("./db");
const Companies = require("./companies");
const Menus = require("./menus");
const Location = require("./locations");
const db = require("./db");

async function sandbox() {
    //creates new tables when file is run 
        await sequelize.sync();
    }
    sandbox();

async function setupDb() {
    Companies.hasMany(Menus, { as: 'menus'});
    Menus.belongsTo(Companies, {
        foreignKey: 'companyId',
        as: 'company'
    });

    Companies.hasMany(Location);
    Location.belongsTo(Companies);

 
    await db.sync();
}

module.exports = setupDb;