import express from "express";
import { getStudents, createStudent } from "../controllers/student-controller.js";
import student from "../models/student-model.js";

const studentRouter = express.Router();

studentRouter.get("/", getStudents);
studentRouter.post("/", createStudent);

export default studentRouter;
