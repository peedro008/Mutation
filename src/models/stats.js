const { DataTypes } = require('sequelize');
const Count= (sequelize)=>{
    sequelize.define('Count', {
        dna:{
            type:DataTypes.ARRAY(DataTypes.STRING),
            unique: true
        },
        mutation: {
            type:DataTypes.BOOLEAN,
        },
   });
};
module.exports= Count;