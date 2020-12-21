const { Pool } = require('pg');
var mysql = require('mysql');
module.exports = {
    port: process.env.PORT || 3002,
    env: process.env.NODE_ENV || 'development',


    /*con : mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"wqtqVSROVpdhilqI00",
        //password:"tbEsNGfMcF8Htt7n",
        //password:"root",
        database: "galate7",
        port: 3306
    }),*/

    mediane: 6,



    // Initialize pool
    pool: mysql.createPool({
        connectionLimit: 100,
        //host:'http://3.134.116.167',
        host: 'localhost',
        port: 3306,
        user: 'root',
        //password: '',
        password: "ILYES@1991",
        database: 'time_token',
        debug: false,
        insecureAuth: true
    }),

    //connection postgress

    dbpool: new Pool({
        user: 'postgres',
        //host: '18.220.209.238',
        host: 'localhost',
        //database: 'sagecity',
        database: 'timetoken',
        password: 'postgres',
        //password: 'J2VgcQnEUNCjry88',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000
    }),


    TEST_ID: 236,
    ORGANIZATION_TYPE: 'global',
    CATEGORY_ID: 22
};