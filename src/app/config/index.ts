import dotenv from 'dotenv';
import path from 'path';

// join  path with current directory and .env
dotenv.config({ path: path.join((process.cwd(), '.env')) });

interface Config {
  port: string | undefined;
  database_url: string | undefined;
  bcrypt_salt_rounds: string | undefined;
}

const config: Config = {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
};

export default config;
