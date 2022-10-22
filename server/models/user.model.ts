import mongoose, { Schema } from "mongoose";
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    minLength: 4,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
});

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (error) {
    console.log(`Err in pre-save the user: ${error}`);
  }
});

export const UserModel =
  mongoose.models.user || mongoose.model("user", userSchema);
