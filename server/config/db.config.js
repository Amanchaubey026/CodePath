const {Sequelize} = require('sequelize');
require('dotenv').config();

const DB_DATABASE = process.env.DB_DATABASE;
const DB_ROOT = process.env.DB_ROOT;
const DB_PASSWORD = process.env.DB_PASSWORD;


const sequelize = new Sequelize(DB_DATABASE, DB_ROOT, DB_PASSWORD, {
    host: 'localhost',
    dialect:'mysql',
    port : 3306
  });

  async function isConnectedToDb(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }



  module.exports = {
    isConnectedToDb,
    sequelize
  }