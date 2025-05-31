// import dotenv from 'dotenv'
// dotenv.config({ path: '.env.local' })
require('dotenv').config({ path: '.env.local' })

import { Sequelize } from 'sequelize'
import config from './config/config'
import pg from 'pg'

console.log(process.env.NODE_ENV)

const env = process.env.NODE_ENV || 'development'
const dbConfig = config[env]

console.log(dbConfig)

const sequelize = new Sequelize(dbConfig.url, {
  dialectModule: pg,
  dialect: "postgres"
})

export default sequelize