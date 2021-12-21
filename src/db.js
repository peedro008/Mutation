require('dotenv').config();
const {postgre}=require("../env") 
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(`postgres://${postgre}@localhost:5432/Mutation`, {logging: false,})
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
 
modelDefiners.forEach(model => model(sequelize));
const  {Count}  = sequelize.models;




module.exports = {
    ...sequelize.models,
    sequelize,    
};