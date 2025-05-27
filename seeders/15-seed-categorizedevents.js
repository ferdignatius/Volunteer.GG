'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categorizedevents', [
      { event_id: 1, category_id: 1, createdAt: new Date(), updatedAt: new Date() }, // Music
      { event_id: 2, category_id: 4, createdAt: new Date(), updatedAt: new Date() }, // Technology
      { event_id: 3, category_id: 2, createdAt: new Date(), updatedAt: new Date() }, // Sports
      { event_id: 4, category_id: 5, createdAt: new Date(), updatedAt: new Date() }, // Food & Drink
      { event_id: 5, category_id: 3, createdAt: new Date(), updatedAt: new Date() }  // Art & Culture
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categorizedevents', null, {});
  }
};
