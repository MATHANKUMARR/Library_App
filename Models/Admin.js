const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
      admin_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      admin_name: {
        type: DataTypes.STRING
      },
      admin_email: {
        type: DataTypes.STRING
      },
      admin_password: {
        type: DataTypes.STRING
      }
    });
  
    return Admin;
  };