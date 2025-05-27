'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('organizationreviews', [
      {
        user_id: 1,
        organization_id: 1,
        review: 'Great organization! They are very responsive and their events are always well-organized.',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        organization_id: 2,
        review: 'Good experience overall, but I wish they offered more workshops. The ones I attended were great though.',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        organization_id: 3,
        review: 'I had a terrible experience with this organization. The event was poorly organized and the staff was unhelpful.',
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        organization_id: 4,
        review: 'Excellent service and informative events. The staff were knowledgeable and friendly.',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        organization_id: 5,
        review: 'Decent experience, but there were some delays. I hope they improve logistics in the future.',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        organization_id: 2,
        review: 'Fantastic team! They really know how to put on a show. I’d recommend them for any event.',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        organization_id: 3,
        review: 'Not great. I felt the event lacked structure and there was confusion throughout the day.',
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        organization_id: 4,
        review: 'Awesome! I learned a lot and the team made sure everything was well coordinated. Would attend again.',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        organization_id: 5,
        review: 'I’m a bit disappointed. The event didn’t live up to the hype, and I feel like the pricing was too high for what we got.',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        organization_id: 1,
        review: 'A top-notch organization with very informative and well-structured events. I had a great time!',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('organizationreviews', null, {});
  }
};
