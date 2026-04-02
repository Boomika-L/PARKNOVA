const {Pool} = require("pg");

const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"parking_db",
    password:"Boomi@2006",
    port:5432,
});
module.exports = pool;