'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('userachievements', [
      {
        user_id: 1,
        achievement_id: 1,
        status: 'achieved',
        createdAt: new Date('2025-06-01T10:00:00'),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        achievement_id: 2,
        status: 'achieved',
        createdAt: new Date('2025-07-15T11:30:00'),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        achievement_id: 2,
        status: 'achieved',
        createdAt: new Date('2025-06-10T14:15:00'),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        achievement_id: 3,
        status: 'achieved',
        createdAt: new Date('2025-08-05T09:45:00'),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        achievement_id: 1,
        status: 'achieved',
        createdAt: new Date('2025-06-25T08:00:00'),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        achievement_id: 4,
        status: 'achieved',
        createdAt: new Date('2025-09-01T12:30:00'),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        achievement_id: 3,
        status: 'achieved',
        createdAt: new Date('2025-07-20T13:00:00'),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        achievement_id: 2,
        status: 'achieved',
        createdAt: new Date('2025-06-15T16:30:00'),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        achievement_id: 4,
        status: 'achieved',
        createdAt: new Date('2025-09-10T17:45:00'),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        achievement_id: 1,
        status: 'achieved',
        createdAt: new Date('2025-06-30T07:20:00'),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('userachievements', null, {});
  }
};
