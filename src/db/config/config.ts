require('dotenv').config({ path: '.env.local' })

module.exports = {
    development: {
        url: process.env.DEV_DATABASE_URL,
        // username: process.env.DEV_DATABASE_USERNAME  "root",
        // password: process.env.DEV_DATABASE_PASSWORD  null,
        // database: process.env.DEV_DATABASE_DBNAME  "database_development",
        // host: process.env.DEV_DATABASE_HOST  "127.0.0.1",
        dialect: "postgres"
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        // username: process.env.TEST_DATABASE_USERNAME,
        // password: process.env.TEST_DATABASE_PASSWORD,
        // database: process.env.TEST_DATABASE_DBNAME,
        // host: process.env.TEST_DATABASE_HOST,
        dialect: "postgres"
    },
    production: {
        url: process.env.DATABASE_URL,
        // username: process.env.DATABASE_USERNAME,
        // password: process.env.DATABASE_PASSWORD,
        // database: process.env.DATABASE_DBNAME,
        // host: process.env.DATABASE_HOST,
        dialect: "postgres"
    },
}