import { Model } from "objection";

class StudentModel extends Model {
  static get tableName() {
    return "student";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName", "email"],
      properties: {
        id: { type: "string" },
        firstName: { type: "string", minLength: 1, maxLength: 255 },
        lastName: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string" },
      },
    };
  }
}

export default StudentModel;
