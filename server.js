const express = require('express');
const app = express();
const PORT = process.env.PORT || 5200;
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// const cors = require('cors');

// app.use(cors({
//   origin: ['http://localhost:4200', 'http://localhost:4200/students','http://localhost:4200/update/:id']
// }));

app.disable("x-powered-by");

//Sequelize
const database = require("./models");
database.sequelize.sync()
  .then(() => {
    console.log("Database Synced successfully");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });

//Routes
app.use('/admin', require('./routes/adminRoute'));
app.use('/student', require('./routes/studentRoute'));
app.use('/book', require('./routes/bookRoute'));
app.use('/list', require('./routes/listRoute'));

app.listen(PORT,console.log("server running URL => http://localhost:" + PORT));