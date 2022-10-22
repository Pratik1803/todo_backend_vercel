import { TaskModel } from "../../models/task.model";
import { Task } from "../../../typings/interfaces/task.interface";
import { NextApiRequest, NextApiResponse } from "next";

export async function addTask(req: NextApiRequest, res: NextApiResponse) {
  const newTask = new TaskModel(req.body);
  const result = await newTask.save();
  res.status(201).json({
    success: true,
    data: result,
  });
}
