const server = require('./src/app.js');
const { sequelize } = require('./src/db')


sequelize.sync({ force: true }).then(() => {
  server.listen(8080, async()=>{
    
   
    try{
      console.log('listening at 8080')
    }
    catch(e){
      console.log("Error in sequelize.sync, index.js: " + e)
    }
  });
});
