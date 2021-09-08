const {DataTypes} = require('sequelize');



module.exports = (sequelize) =>{
    sequelize.define('diet',{
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    
      name: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true,

      },
    },
    {     timestamps: false   })}
  