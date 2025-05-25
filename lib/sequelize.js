require('dotenv').config({ path: '.env.local' })
import { Sequelize } from 'sequelize'
import config from '../config/config'
console.log(process.env.NODE_ENV)
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env]

const sequelize = new Sequelize(dbConfig.url, {
    dialectModule: require('pg')
})

export default sequelize