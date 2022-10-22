import { TaskModel } from "../../models/task.model";
import { Task } from "../../../typings/interfaces/task.interface";
import { NextApiRequest, NextApiResponse } from "next";

export async function updateTask(req: NextApiRequest, res: NextApiResponse) {
  const result = await TaskModel.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true }
  );
  res.status(200).json({
    success: true,
    data: result,
  });
}
