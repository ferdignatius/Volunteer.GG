'use strict';

const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [];

    for (let i = 1; i <= 10; i++) {
      users.push({
        id: i,
        name: faker.person.fullName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
}

// 'use strict';

// import { faker } from '@faker-js/faker';

// module.exports = {
//   async up(queryInterface) {
//     const users = [];

//     for (let i = 0; i < 10; i++) {
//       users.push({
//         name: faker.name.fullName(),
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       });
//     }

//     await queryInterface.bulkInsert('users', users);
//   },

//   async down(queryInterface) {
//     await queryInterface.bulkDelete('users', null, {});
//   },
// };