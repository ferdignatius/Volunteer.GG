'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('eventcategories', [
      { id: 1, category: 'Music', color: '#FF6347', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, category: 'Sports', color: '#32CD32', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, category: 'Art & Culture', color: '#8A2BE2', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, category: 'Technology', color: '#00BFFF', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, category: 'Food & Drink', color: '#FFD700', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('eventcategories', null, {});
  }
};
