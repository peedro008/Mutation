const server = require('./src/app.js');
const { sequelize } = require('./src/db')


sequelize.sync({ force: true }).then(() => {
  server.listen(3000, async()=>{
    
   
    try{
      console.log('listening at 3000')
    }
    catch(e){
      console.log("Error in sequelize.sinc, index.js: " + e)
    }
  });
});
