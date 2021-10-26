


  module.exports = (sequelize, DataTypes) => {
   const Medicament = sequelize.define('Medicament', {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.DECIMAL,
   
    })

   
    Medicament.associate = (models) => {
        // associations can be defined here

    };

    return Medicament;

}
