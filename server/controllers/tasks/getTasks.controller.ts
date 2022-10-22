import { TaskModel } from "../../models/task.model";
import { Task } from "../../../typings/interfaces/task.interface";
import { NextApiRequest, NextApiResponse } from "next";

export async function getTasks(req: NextApiRequest, res: NextApiResponse) {
  const result = await TaskModel.find({});
  res.status(200).json({
    success: true,
    data: result,
  });
}
