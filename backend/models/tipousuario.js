'use strict';
module.exports = (sequelize, DataTypes) => {
  const TipoUsuario = sequelize.define('TipoUsuario', {
    nombre: DataTypes.STRING
  }, {});
  TipoUsuario.associate = function(models) {
    // associations can be defined here
    TipoUsuario.hasMany(models.Usuario)
  };
  return TipoUsuario;
};