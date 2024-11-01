export const up = async (knex) => {
  await knex.schema.createTable("student", (table) => {
    table.increments("id").primary();
    table.string("first_name", 50).notNullable();
    table.string("last_name", 50).notNullable();
    table.string("email", 100).unique().notNullable();
    table.date("date_of_birth").notNullable();
    table.timestamps(true, true);
  });
};

export const down = async (knex) => {
  await knex.schema.dropTableIfExists("student");
};
