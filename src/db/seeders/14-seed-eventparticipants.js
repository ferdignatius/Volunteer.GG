'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('eventparticipants', [
      {
        user_id: 1,
        event_id: 1,
        status: 'leader',
        is_verified: 'verified',
        proof_url: 'https://static-cse.canva.com/blob/1723351/tools-feature_hd-photo-converter_hero_mobile.jpg',
        createdAt: new Date('2025-05-20T12:45:00Z'),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        event_id: 2,
        status: 'activist',
        is_verified: null,
        proof_url: 'https://static-cse.canva.com/blob/1723351/tools-feature_hd-photo-converter_hero_mobile.jpg',
        createdAt: new Date('2025-05-22T08:00:00Z'),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        event_id: 3,
        status: 'volunteer',
        is_verified: 'rejected',
        proof_url: 'https://static-cse.canva.com/blob/1723351/tools-feature_hd-photo-converter_hero_mobile.jpg',
        createdAt: new Date('2025-05-23T16:30:00Z'),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        event_id: 4,
        status: 'leader',
        is_verified: 'verified',
        proof_url: 'https://static-cse.canva.com/blob/1723351/tools-feature_hd-photo-converter_hero_mobile.jpg',
        createdAt: new Date('2025-05-25T10:15:00Z'),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        event_id: 5,
        status: 'activist',
        is_verified: 'verified',
        proof_url: 'https://static-cse.canva.com/blob/1723351/tools-feature_hd-photo-converter_hero_mobile.jpg',
        createdAt: new Date('2025-05-26T14:00:00Z'),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        event_id: 1,
        status: 'volunteer',
        is_verified: null,
        proof_url: 'https://static-cse.canva.com/blob/1723351/tools-feature_hd-photo-converter_hero_mobile.jpg',
        createdAt: new Date('2025-05-20T17:00:00Z'),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        event_id: 4,
        status: 'activist',
        is_verified: 'rejected',
        proof_url: 'https://static-cse.canva.com/blob/1723351/tools-feature_hd-photo-converter_hero_mobile.jpg',
        createdAt: new Date('2025-05-24T12:00:00Z'),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('eventparticipants', null, {});
  }
};
