import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const postgresClient = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default postgresClient;
