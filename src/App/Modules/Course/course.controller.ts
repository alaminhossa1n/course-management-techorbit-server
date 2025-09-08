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

export const CourseController = {
  createCourse,
  deleteCourse,
};
