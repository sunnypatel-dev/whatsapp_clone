import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg",
    },
    about: {
      type: String,
      default: "Hey there, I am using whatsapp!",
    },
    occupation: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
