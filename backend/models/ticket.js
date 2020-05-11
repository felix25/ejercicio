'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    ticket_string: DataTypes.STRING,
    ticket_status: DataTypes.INTEGER
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsTo(models.Usuario,{
      foreignKey:'UsuarioId'
    })
  };
  return Ticket;
};