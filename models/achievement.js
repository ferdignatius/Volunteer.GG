import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize'; // Adjust the path as needed

const Achievement = sequelize.define('Achievement', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  min_points: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'achievements',
  timestamps: true, // Automatically handles createdAt and updatedAt
});

export default Achievement;
