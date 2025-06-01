import { DataTypes } from 'sequelize';
import sequelize from '../sequelize';

const Item = sequelize.define('Item', {
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
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  points_price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  category: {
    type: DataTypes.ENUM('special', 'normal', 'paid'),
    allowNull: false,
    defaultValue: 'normal',
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  }
}, {
  tableName: 'items',
  timestamps: true, // Ini akan membuat created_at dan updated_at
});

export default Item;