import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Vinit@8896',
  database: 'auth_system'
});

export default pool;