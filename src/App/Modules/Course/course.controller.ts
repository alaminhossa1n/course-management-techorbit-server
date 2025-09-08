import { Request, Response } from "express";
import { CourseService } from "./course.service";
import { ZodCourseValidation } from "./course.validation";

const createCourse = async (req: Request, res: Response) => {
  const validatedData = ZodCourseValidation.parse(req.body);

  console.log(req.user);
  console.log("hhh");

  const newCourse = await CourseService.createCourse(validatedData);
  res.status(201).json({
    success: true,
    message: "Course created successfully",
    newCourse,
  });
};

export const CourseController = {
  createCourse,
};
