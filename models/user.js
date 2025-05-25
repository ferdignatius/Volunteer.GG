import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize'; // adjust path if needed

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Users',    // explicitly set table name (optional)
  timestamps: true,      // adds createdAt and updatedAt
});

export default User