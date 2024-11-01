import express from "express";
import StudentController from "../../controllers/StudentController.js";

const router = express.Router();

router.post("/", (req, res, next) =>
  StudentController.createStudent(req, res).catch(next)
);

router.get("/", (req, res, next) =>
  StudentController.getStudents(req, res).catch(next)
);

export default router;
