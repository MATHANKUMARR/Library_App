const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      student_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      student_name: {
        type: DataTypes.STRING
      },
      student_register_no: {
        type: DataTypes.STRING
      },
      student_department: {
        type: DataTypes.STRING
      },
      student_year_of_studying: {
        type: DataTypes.STRING
      }
    });
  
    return Student;
  };