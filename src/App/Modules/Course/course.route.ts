import { Router } from "express";
import { CourseController } from "./course.controller";
import auth from "../../Middleware/auth";

const router = Router();
router.post("/create", auth("admin"), CourseController.createCourse);
router.delete(
  "/delete/:courseId",
  auth("admin"),
  CourseController.deleteCourse
);

export const courseRouter = router;
