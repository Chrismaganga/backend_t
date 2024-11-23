import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: process.env.DB_PASSWORD,
  port: 5432,
});
export default pool;
pool.connect((err: Error | undefined, _client: any, release: any) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  }
  console.log('Database connected successfully')
  release()
})