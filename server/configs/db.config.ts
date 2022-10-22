import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

export const conn = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connection Successful!");
    return true;
  } catch (error) {
    console.log(`Err in connecting to DB: ${error}`);
    return false;
  }
};
