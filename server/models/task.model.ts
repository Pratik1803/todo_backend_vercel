import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  un: String,
  completed: Boolean,
});

export const TaskModel =
  mongoose.models.task || mongoose.model("task", taskSchema);
