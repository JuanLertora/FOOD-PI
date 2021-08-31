const {DataTypes} = require('sequelize');


module.exports = (sequelize) =>{
    sequelize.define('Dieta',{
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
    
      nombre: {
        type: DataTypes.STRING,
      },
    })}
  