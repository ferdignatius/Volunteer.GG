import { DataTypes } from 'sequelize';
import sequelize from '@/db/sequelize'
import EventCategory from './eventcategory';

const CategorizedEvent = sequelize.define('CategorizedEvent', {
  event_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'events',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'eventcategories',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'categorizedevents',
  timestamps: true,
})

CategorizedEvent.belongsTo(EventCategory, { foreignKey: 'category_id' })

export default CategorizedEvent;
