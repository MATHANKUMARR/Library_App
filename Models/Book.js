const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      book_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      book_name: {
        type: DataTypes.STRING
      },
      author_name: {
        type: DataTypes.STRING
      },
      book_type: {
        type: DataTypes.STRING
      },
      country: {
        type: DataTypes.STRING
      },
      other_details: {
        type: DataTypes.STRING
      }
    });
  
    return Book;
  };