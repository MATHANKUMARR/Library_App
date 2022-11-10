const dbConfig = require("../DBConfig/Database");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.book = require("./Book.js")(sequelize, Sequelize);
database.admin = require("./Admin.js")(sequelize, Sequelize);
database.student = require("./Student.js")(sequelize, Sequelize);
database.list = require("./List.js")(sequelize, Sequelize);

module.exports = database;