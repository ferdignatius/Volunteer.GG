'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usercertificates', [
      {
        id: 1,
        user_id: 1,
        certificate_url: 'https://static.vecteezy.com/system/resources/thumbnails/002/349/754/small_2x/modern-elegant-certificate-template-free-vector.jpg',
        createdAt: new Date('2025-01-15T14:32:00Z'),
        updatedAt: new Date('2025-01-15T14:32:00Z')
      },
      {
        id: 2,
        user_id: 2,
        certificate_url: 'https://static.vecteezy.com/system/resources/thumbnails/002/349/754/small_2x/modern-elegant-certificate-template-free-vector.jpg',
        createdAt: new Date('2025-02-03T09:45:00Z'),
        updatedAt: new Date('2025-02-03T09:45:00Z')
      },
      {
        id: 3,
        user_id: 3,
        certificate_url: 'https://static.vecteezy.com/system/resources/thumbnails/002/349/754/small_2x/modern-elegant-certificate-template-free-vector.jpg',
        createdAt: new Date('2025-03-25T11:10:00Z'),
        updatedAt: new Date('2025-03-25T11:10:00Z')
      },
      {
        id: 4,
        user_id: 4,
        certificate_url: 'https://static.vecteezy.com/system/resources/thumbnails/002/349/754/small_2x/modern-elegant-certificate-template-free-vector.jpg',
        createdAt: new Date('2025-04-11T16:05:00Z'),
        updatedAt: new Date('2025-04-11T16:05:00Z')
      },
      {
        id: 5,
        user_id: 5,
        certificate_url: 'https://static.vecteezy.com/system/resources/thumbnails/002/349/754/small_2x/modern-elegant-certificate-template-free-vector.jpg',
        createdAt: new Date('2025-05-07T19:25:00Z'),
        updatedAt: new Date('2025-05-07T19:25:00Z')
      },
      {
        id: 6,
        user_id: 1,
        certificate_url: 'https://static.vecteezy.com/system/resources/thumbnails/002/349/754/small_2x/modern-elegant-certificate-template-free-vector.jpg',
        createdAt: new Date('2025-06-15T14:55:00Z'),
        updatedAt: new Date('2025-06-15T14:55:00Z')
      },
      {
        id: 7,
        user_id: 2,
        certificate_url: 'https://static.vecteezy.com/system/resources/thumbnails/002/349/754/small_2x/modern-elegant-certificate-template-free-vector.jpg',
        createdAt: new Date('2025-07-22T13:15:00Z'),
        updatedAt: new Date('2025-07-22T13:15:00Z')
      },
      {
        id: 8,
        user_id: 3,
        certificate_url: 'https://static.vecteezy.com/system/resources/thumbnails/002/349/754/small_2x/modern-elegant-certificate-template-free-vector.jpg',
        createdAt: new Date('2025-08-19T10:05:00Z'),
        updatedAt: new Date('2025-08-19T10:05:00Z')
      },
      {
        id: 9,
        user_id: 4,
        certificate_url: 'https://static.vecteezy.com/system/resources/thumbnails/002/349/754/small_2x/modern-elegant-certificate-template-free-vector.jpg',
        createdAt: new Date('2025-09-14T18:30:00Z'),
        updatedAt: new Date('2025-09-14T18:30:00Z')
      },
      {
        id: 10,
        user_id: 5,
        certificate_url: 'https://static.vecteezy.com/system/resources/thumbnails/002/349/754/small_2x/modern-elegant-certificate-template-free-vector.jpg',
        createdAt: new Date('2025-10-02T17:20:00Z'),
        updatedAt: new Date('2025-10-02T17:20:00Z')
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usercertificates', null, {});
  }
};
