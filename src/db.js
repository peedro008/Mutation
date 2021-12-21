require('dotenv').config();
//const {postgre}=require("../env") 
const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');


//const sequelize = new Sequelize(`postgres://${postgre}@localhost:5432/Mutation`, {logging: false,})

const sequelize = new Sequelize( "postgres", "postgres", "pesanmene",  {
  host: "mutation.cnudap9ls8sm.us-east-2.rds.amazonaws.com",
  dialect:'postgres',
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


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