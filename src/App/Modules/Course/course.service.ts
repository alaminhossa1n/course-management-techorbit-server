import CourseModel from "./course.model";
import { TCourse } from "./course.validation";

const createCourse = async (course: TCourse) => {
  const newCourse = await CourseModel.create(course);
  return newCourse;
};

export const CourseService = {
  createCourse,
};
