module.exports = (sequelize, DataTypes) => {
    const Medicament = sequelize.define('Medicament', {
      title: DataTypes.STRING,
      descrption: DataTypes.TEXT,
      price: DataTypes.STRING,
   
    })
  
    Medicament.associate = function (models) {
    }
  
    return Medicament
  }