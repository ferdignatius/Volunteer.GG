import { DataTypes } from 'sequelize';
import sequelize from '@/db/sequelize'

const OrganizationImage = sequelize.define('OrganizationImage', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  organization_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'organizations',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'organizationimages',
  timestamps: true,
});

export default OrganizationImage;
