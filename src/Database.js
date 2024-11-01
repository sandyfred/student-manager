import { Model } from "objection";

class Database {
  async init(config) {
    const { default: Knex } = await import("knex");
    this.knex = Knex(config.database);
    Model.knex(this.knex);
  }

  getInstance() {
    return this.knex;
  }
}

export default new Database();
