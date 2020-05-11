'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Usuarios',[
      {
        id:1,
        nombre:"Admin",
        email:'admin@admin.com',
        pass:'admin123',
        idTipoUsuario:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        nombre:"Juanito Perez",
        email:'juanito@test.com',
        pass:'123',
        idTipoUsuario:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        nombre:"Samuel Torres",
        email:'samuel@test.com',
        pass:'123',
        idTipoUsuario:2,
        createdAt: new Date(),
        updatedAt: new Date()
     }
  ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
