'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('organizationmembers', [
      { user_id: 1, organization_id: 1, status: 'leader', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, organization_id: 2, status: 'member', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, organization_id: 3, status: 'activist', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, organization_id: 4, status: 'member', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, organization_id: 5, status: 'leader', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 2, organization_id: 1, status: 'activist', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 3, organization_id: 2, status: 'leader', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 1, organization_id: 3, status: 'member', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 4, organization_id: 5, status: 'activist', createdAt: new Date(), updatedAt: new Date() },
      { user_id: 5, organization_id: 4, status: 'member', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('organizationmembers', null, {});
  }
};
