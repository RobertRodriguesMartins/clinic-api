'use strict';

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      'surgery',
      [
        {
          specialty: 'Apendicectomia',
          doctor: 'Rey Dos Santos',
        },
        {
          specialty: 'Cistectomia',
          doctor: 'Marcos Afonso',
        },

        {
          specialty: 'Colecistectomia',
          doctor: 'Iuri Solto',
        },
        {
          specialty: 'Craniectomia',
          doctor: 'Marilene Tobias',
        },
        {
          specialty: 'Gastrorrafia',
          doctor: 'Joana Machado',
        },
        {
          specialty: 'Herniorrafia',
          doctor: 'Lincoln Mathias',
        },
        {
          specialty: 'Hisperopexia',
          doctor: 'Alessandra Martins',
        },
        {
          specialty: 'Cistoscopia',
          doctor: 'Adailton Rodrigues',
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('surgery', null, {});
  },
};
