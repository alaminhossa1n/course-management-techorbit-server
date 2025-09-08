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
router.get("/all-courses", CourseController.getAllCourses);
router.get("/single-course/:courseId", CourseController.getCourseById);

export const courseRouter = router;
