import { DataTypes } from 'sequelize';
import sequelize from '@/db/sequelize'

const UserPurchase = sequelize.define('UserPurchase', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  money_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  point_price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'userpurchases',
  timestamps: true, // createdAt and updatedAt managed automatically
});

export default UserPurchase;
