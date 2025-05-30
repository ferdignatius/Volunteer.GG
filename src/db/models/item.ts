import { DataTypes } from 'sequelize';
import sequelize from '@/db/sequelize'

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
  img_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  money_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  point_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  existed_until: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'items',
  timestamps: true, // createdAt and updatedAt will be handled automatically
});

export default Item;