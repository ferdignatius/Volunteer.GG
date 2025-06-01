require('dotenv').config({ path: '.env.local' })
import { Sequelize } from 'sequelize'
import pg from 'pg'

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectModule: pg,
  dialect: "postgres"
})

export default sequelize