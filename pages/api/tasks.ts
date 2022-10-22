import { NextApiRequest, NextApiResponse } from "next";
import { Task } from "../../typings/interfaces/task.interface";
import { TaskModel } from "../../server/models/task.model";
import { conn } from "../../server/configs/db.config";
import { getTasks } from "../../server/controllers/tasks/getTasks.controller";
import { addTask } from "../../server/controllers/tasks/addTask.controller";
import { updateTask } from "../../server/controllers/tasks/updateTask.controller";
import { deleteTask } from "../../server/controllers/tasks/deleteTasks.controller";

export default async function handleTasks(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const connection = await conn();
    if (!connection) {
      return res.status(500).json({
        success: false,
        data: {
          message: "Server refused to connect!",
        },
      });
    }
    switch (req.method) {
      case "GET":
        await getTasks(req, res);
        break;
      case "POST":
        await addTask(req, res);
        break;

      case "PUT":
        await updateTask(req, res);
        break;

      case "DELETE":
        await deleteTask(req, res);
        break;

      default:
        break;
    }
  } catch (error) {
    console.log(`Err at /tasks: ${error}`);

    res.status(400).json({
      success: false,
      data: {
        method: req.method,
        message: `Err at /tasks: ${error}`,
      },
    });
  }
}
