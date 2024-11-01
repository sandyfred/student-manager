import logger from "../logger.js";
import StudentModel from "../models/StudentModel.js";
import ApiError from "../utils/ApiError.js";

class StudentService {
  async createStudent(request) {
    try {
      const isEmailUsed = await StudentModel.query().findOne({
        email: request.email,
      });

      if (isEmailUsed) {
        throw new ApiError("Email already exists", 400);
      }

      return await StudentModel.query().insert(request);
    } catch (e) {
      this.handleError(e);
    }
  }

  async getStudents(params) {
    try {
      const { page = 0, perPage = 100 } = params;
      return await StudentModel.query().page(page, perPage);
    } catch (e) {
      this.handleError(e);
    }
  }

  handleError(e) {
    logger.error(e);
    if (e instanceof ApiError) {
      throw e;
    } else {
      throw new ApiError("Something went wrong");
    }
  }
}

export default new StudentService();
