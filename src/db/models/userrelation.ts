import { DataTypes } from 'sequelize'
import sequelize from '@/db/sequelize'

const UserRelation = sequelize.define('UserRelation', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  friend_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'userrelations',
  timestamps: true, // handles createdAt and updatedAt
});

export default UserRelation;
