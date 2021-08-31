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
  
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
  
    },
  
    Puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
  
    },
  
    ComidaSaludable: {
      type: DataTypes.STRING,
    },
    
    PasoAPaso: {
      type: DataTypes.TEXT,
  },
})}

