import express from "express";
import StudentRoutes from "./StudentRoutes.js";

const router = express.Router();

router.use("/students", StudentRoutes);

export default router;
