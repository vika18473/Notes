import {Sequelize} from 'sequelize'

export default new Sequelize(
  "swagertest",
   "postgres",
    "dbrecz18473",
     {
    dialect: "postgres",host:"localhost",port:"5432",operatorsAliases: false
  });  
    
    
  

    

