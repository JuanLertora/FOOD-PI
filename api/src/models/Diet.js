const {DataTypes} = require('sequelize');



module.exports = (sequelize) =>{
    sequelize.define('diet',{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    
      nombre: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,

      },
    },
    {     timestamps: false   })}
  