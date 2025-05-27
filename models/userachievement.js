import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize'; // adjust path if needed

const UserAchievement = sequelize.define('UserAchievement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  achievement_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'achievements',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'userachievements',
  timestamps: true, // Sequelize will auto-manage createdAt and updatedAt
});

export default UserAchievement;
