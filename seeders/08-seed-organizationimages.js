'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('organizationimages', [
      {
        id: 1,
        organization_id: 1,
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        organization_id: 2,
        img_url: 'https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        organization_id: 3,
        img_url: 'https://assets.entrepreneur.com/content/3x2/2000/1413823428-amazingly-free-stock-websites.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        organization_id: 4,
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        organization_id: 5,
        img_url: 'https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        organization_id: 2,
        img_url: 'https://assets.entrepreneur.com/content/3x2/2000/1413823428-amazingly-free-stock-websites.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        organization_id: 3,
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        organization_id: 4,
        img_url: 'https://static.desygner.com/wp-content/uploads/sites/13/2022/05/04141642/Free-Stock-Photos-01.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        organization_id: 1,
        img_url: 'https://assets.entrepreneur.com/content/3x2/2000/1413823428-amazingly-free-stock-websites.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        organization_id: 5,
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR132TBAD0-GhGhN8_2Xr-3obkFd4NzFbk6Hg&s',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('organizationimages', null, {});
  }
};
