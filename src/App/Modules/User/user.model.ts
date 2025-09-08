import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret: any) => {
        delete ret.password;
        return ret;
      },
    },
    toObject: {
      transform: (_doc, ret: any) => {
        delete ret.password;
        return ret;
      },
    },
  }
);

UserSchema.pre("save", async function (next) {
  const user = this as unknown as {
    isModified: (path: string) => boolean;
    password?: string;
  };
  if (user.isModified("password") && user.password) {
    // @ts-ignore - mongoose doc typings
    this.password = await bcrypt.hash(this.password as string, 10);
  }
  next();
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
