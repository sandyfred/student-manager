import StudentService from "../services/StudentService.js";

class StudentController {
  async createStudent(req, res) {
    const { body } = req;
    const student = await StudentService.createStudent(body);
    res.status(201).send(student);
  }

  async getStudents(req, res) {
    const { query } = req;
    const students = await StudentService.getStudents(query);
    res.status(200).send(students);
  }
}

export default new StudentController();
