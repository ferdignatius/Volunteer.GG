'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('achievements', [
      {
        id: 1,
        title: 'Beginner Explorer',
        description: 'Earn 200 points to unlock the title of Beginner Explorer! A milestone for those just starting their journey.',
        min_points: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Community Contributor',
        description: 'Earn 500 points and be recognized as a Community Contributor for your active participation and support.',
        min_points: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Top Performer',
        description: 'Reach 1000 points and become a Top Performer, a badge for those who go above and beyond!',
        min_points: 1000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Legendary Status',
        description: 'Earn 2000 points to achieve Legendary Status! This is a prestigious award given to the most dedicated participants.',
        min_points: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('achievements', null, {});
  }
};
