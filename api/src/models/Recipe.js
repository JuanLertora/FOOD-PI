const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) =>{
    sequelize.define('Recipe',{
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
  
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
  
    },
  
    score: {
      type: DataTypes.INTEGER,
    
  
    },
  
    healthyness: {
      type: DataTypes.STRING,
    },
    
    steps: {
      type: DataTypes.TEXT,
  },
},{     timestamps: false   })}

