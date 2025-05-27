'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('chats', [
      { user1_id: 1, user2_id: 2, chat: 'Hey Bob! How was your weekend?', datetime: new Date('2025-06-01T15:10:00Z'), createdAt: new Date(), updatedAt: new Date() },
      { user1_id: 1, user2_id: 3, chat: 'Hey Charlie, are you up for a hike this weekend?', datetime: new Date('2025-06-02T10:25:00Z'), createdAt: new Date(), updatedAt: new Date() },
      { user1_id: 2, user2_id: 4, chat: 'Dana, do you have the design files for the project?', datetime: new Date('2025-06-03T09:30:00Z'), createdAt: new Date(), updatedAt: new Date() },
      { user1_id: 3, user2_id: 5, chat: 'Ethan, can you send me the link to the tech talk?', datetime: new Date('2025-06-04T11:45:00Z'), createdAt: new Date(), updatedAt: new Date() },
      { user1_id: 4, user2_id: 2, chat: 'Bob, I was thinking about your idea for the event. It sounds great!', datetime: new Date('2025-06-05T14:00:00Z'), createdAt: new Date(), updatedAt: new Date() },
      { user1_id: 5, user2_id: 1, chat: 'Alice, I saw that amazing picture you posted from the trail last weekend!', datetime: new Date('2025-06-06T13:15:00Z'), createdAt: new Date(), updatedAt: new Date() },
      { user1_id: 2, user2_id: 5, chat: 'Ethan, do you want to join a photography meetup next month?', datetime: new Date('2025-06-07T16:00:00Z'), createdAt: new Date(), updatedAt: new Date() },
      { user1_id: 3, user2_id: 4, chat: 'Dana, we should plan something fun for the upcoming long weekend!', datetime: new Date('2025-06-08T12:25:00Z'), createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('chats', null, {});
  }
};
