import { TaskModel } from "../../models/task.model";
import { Task } from "../../../typings/interfaces/task.interface";
import { NextApiRequest, NextApiResponse } from "next";

export async function getTasks(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.un) {
    return res.status(400).json({
      success: false,
      data: {
        message: "uid is missing in query!",
      },
    });
  }
  const result = await TaskModel.find({ un: req.query.un });
  res.status(200).json({
    success: true,
    data: result,
  });
}
