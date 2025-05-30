'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('organizations', [
      {
        id: 1,
        name: 'Green Earth Foundation',
        description: 'Dedicated to environmental sustainability and awareness campaigns worldwide.',
        avg_rating: 4.7,
        credibility: 'Trusted',
        logo_url: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Future Coders Initiative',
        description: 'Empowering underrepresented communities with programming and tech education.',
        avg_rating: 4.2,
        credibility: 'Good',
        logo_url: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Wellness for All',
        description: 'Promoting mental and physical wellness through accessible community programs.',
        avg_rating: 3.5,
        credibility: 'Neutral',
        logo_url: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Open Aid Network',
        description: 'Connecting donors with verified small-scale humanitarian projects across the globe.',
        avg_rating: 4.9,
        credibility: 'Trusted',
        logo_url: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Urban Youth Alliance',
        description: 'Working to improve opportunities for inner-city youth through education and mentorship.',
        avg_rating: 2.8,
        credibility: 'Suspicious',
        logo_url: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('organizations', null, {});
  }
};
