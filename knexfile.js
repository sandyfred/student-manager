import config from "./src/config.js";

export default {
  client: "pg",
  connection: config.database.connection,
  migrations: {
    tableName: "knex_migrations",
    directory: "./db/migrations",
    stub: "./db/migration.stub",
  },
};
