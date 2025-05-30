import { DataTypes } from 'sequelize';
import sequelize from '@/db/sequelize'

const UserCertificate = sequelize.define('UserCertificate', {
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
  certificate_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'usercertificates',
  timestamps: true, // handles createdAt and updatedAt automatically
});

export default UserCertificate;
