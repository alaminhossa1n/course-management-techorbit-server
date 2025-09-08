import { Router } from "express";
import { CourseController } from "./course.controller";

const router = Router();
router.post("/create", CourseController.createCourse);

export const courseRouter = router;
