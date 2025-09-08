import { Request, Response } from "express";
import { CourseService } from "./course.service";
import { ZodCourseValidation } from "./course.validation";

//create course
const createCourse = async (req: Request, res: Response) => {
  const validatedData = ZodCourseValidation.parse(req.body);

  const newCourse = await CourseService.createCourse(validatedData);
  res.status(201).json({
    success: true,
    message: "Course created successfully",
    newCourse,
  });
};

//delete course
const deleteCourse = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const deletedCourse = await CourseService.deleteCourse(courseId);
  res.status(200).json({
    success: true,
    message: "Course deleted successfully",
    deletedCourse,
  });
};

//get all courses
const getAllCourses = async (req: Request, res: Response) => {
  const courses = await CourseService.getAllCourses();
  res.status(200).json({
    success: true,
    message: "Courses fetched successfully",
    courses,
  });
};

//get single course
const getCourseById = async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const course = await CourseService.getCourseById(courseId);
  res.status(200).json({
    success: true,
    message: "Course fetched successfully",
    course,
  });
};

export const CourseController = {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
};
