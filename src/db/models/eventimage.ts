import { DataTypes } from 'sequelize';
import sequelize from '@/db/sequelize'

const EventImage = sequelize.define('EventImage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'events',
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
  tableName: 'eventimages',
  timestamps: true, // handles createdAt and updatedAt automatically
});

export default EventImage;
