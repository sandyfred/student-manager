import dotenv from "dotenv";
import { knexSnakeCaseMappers } from "objection";

dotenv.config();

const config = {
  app: {
    port: process.env.PORT,
  },
  database: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
    },
    ...knexSnakeCaseMappers(), // to convert camelCase in js to underscore names in tables
  },
};

export default config;
