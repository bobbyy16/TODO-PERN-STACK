const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'todolist',
  password: 'password',
  port: 5432,
})

module.exports = pool;

// db commands

// psql -d postgres me - password

// \c <dbname>
// \dt - table
