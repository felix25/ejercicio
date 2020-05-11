'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
    Usuario.belongsTo(models.TipoUsuario,{
      foreignKey:'idTipoUsuario'
    })
    Usuario.hasMany(models.Ticket)
  };
  return Usuario;
};