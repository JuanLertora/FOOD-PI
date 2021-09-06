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
  
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
  
    },
  
    puntuacion: {
      type: DataTypes.INTEGER,
    
  
    },
  
    comidasaludable: {
      type: DataTypes.STRING,
    },
    
    pasoapaso: {
      type: DataTypes.TEXT,
  },
},{     timestamps: false   })}

