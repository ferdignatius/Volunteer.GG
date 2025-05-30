'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userrelations', [
      { user_id: 1, friend_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, friend_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, friend_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, friend_id: 5, createdAt: new Date(), updatedAt: new Date() },

      { user_id: 2, friend_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, friend_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, friend_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, friend_id: 5, createdAt: new Date(), updatedAt: new Date() },

      { user_id: 3, friend_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, friend_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, friend_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, friend_id: 5, createdAt: new Date(), updatedAt: new Date() },

      { user_id: 4, friend_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, friend_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, friend_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, friend_id: 5, createdAt: new Date(), updatedAt: new Date() },

      { user_id: 5, friend_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, friend_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, friend_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, friend_id: 4, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userrelations', null, {});
  }
};
