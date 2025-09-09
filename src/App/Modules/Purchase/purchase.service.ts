import AppError from "../../Errors/AppError";
import CourseModel from "../Course/course.model";
import UserModel from "../User/user.model";
import PurchaseModel from "./purchase.model";
import { TPurchase } from "./purchase.validation";

// Purchase course
const purchaseCourse = async (userId: string, payload: TPurchase) => {
  const isUserExist = await UserModel.findById(userId);

  if (!isUserExist) {
    throw new AppError(400, "User does not exist");
  }

  const isCourseExist = await CourseModel.findById(payload.courseId);
  if (!isCourseExist) {
    throw new AppError(400, "Course does not exist");
  }

  const result = await PurchaseModel.create({
    purchasedBy: userId,
    courseId: payload.courseId,
    amount: payload.amount,
  });
  return result;
};

//get purchased courses
const getPurchasedCourses = async (userId: string) => {
  const purchases = await PurchaseModel.find({ purchasedBy: userId }).populate(
    "courseId"
  );
  // .populate("purchasedBy", "-password -__v -createdAt -updatedAt");
  return purchases;
};

export const PurchaseService = {
  purchaseCourse,
  getPurchasedCourses,
};
