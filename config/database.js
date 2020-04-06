const {createPool} = require("mysql");
const {migration} = require("node-mysql-migration")

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    multipleStatements: true
});

module.exports = pool;