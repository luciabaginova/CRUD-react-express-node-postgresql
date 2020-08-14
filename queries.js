const { Console } = require('console')

require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: `${process.env.DB_USER}`,
  host: `${process.env.HOST}`,
  database: `${process.env.DATABASE}`,
  password: `${process.env.PASSWORD}`,
  port: `${process.env.DB_PORT}`,
})

