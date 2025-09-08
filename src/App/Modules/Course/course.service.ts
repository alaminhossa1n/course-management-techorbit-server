import CourseModel from "./course.model";
import { TCourse } from "./course.validation";

//create course
const createCourse = async (course: TCourse) => {
  const newCourse = await CourseModel.create(course);
  return newCourse;
};

//delete course
const deleteCourse = async (courseId: string) => {
  const deletedCourse = await CourseModel.findByIdAndDelete(courseId);
  return deletedCourse;
};

export const CourseService = {
  createCourse,
  deleteCourse,
};
