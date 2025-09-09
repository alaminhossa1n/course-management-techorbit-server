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

//get all courses
const getAllCourses = async () => {
  const courses = await CourseModel.find();
  return courses;
};

//get single course
const getCourseById = async (courseId: string) => {
  const course = await CourseModel.findById(courseId);
  return course;
};

export const CourseService = {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
};
