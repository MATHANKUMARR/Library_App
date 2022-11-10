const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const List = sequelize.define("list", {
      list_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      book_id: {
        type: DataTypes.STRING
      },
      student_id: {
        type: DataTypes.STRING
      },
      book_checkout_date: {
        type: DataTypes.STRING
      },
      book_returned_date: {
        type: DataTypes.STRING
      },
      book_due_date: {
        type: DataTypes.STRING
      },
      total_fine:{
        type: DataTypes.STRING
      }
    });
  
    return List;
  };