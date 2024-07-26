import db from '../config/db.js';

const createUser = async (username, email, password) => {
  const [result] = await db.execute(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, password]
  );
  return result;
};

const findUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const findUserById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

export { createUser, findUserByEmail, findUserById };

