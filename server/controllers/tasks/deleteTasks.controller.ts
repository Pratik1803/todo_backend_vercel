import { TaskModel } from "../../models/task.model";
import { Task } from "../../../typings/interfaces/task.interface";
import { NextApiRequest, NextApiResponse } from "next";

export async function deleteTask(req: NextApiRequest, res: NextApiResponse) {
  const result = await TaskModel.findByIdAndDelete(req.body._id);
  res.status(200).json({
    success: true,
    data: result,
  });
}
