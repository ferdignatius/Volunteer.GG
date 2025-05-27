import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize'; // adjust path as needed

const Organization = sequelize.define('Organization', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  avg_rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  credibility: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  logo_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'organizations',
  timestamps: true, // createdAt and updatedAt handled automatically
});

export default Organization;
