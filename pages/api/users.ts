import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../server/configs/db.config";
import { Task } from "../../typings/interfaces/task.interface";
import { UserModel } from "../../server/models/user.model";
import { createUser } from "../../server/controllers/users/createUser.controller";
import { verifyUser } from "../../server/controllers/users/verifyUser.controller";

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  try {
    const connection = await conn();
    if (!connection)
      return res.status(500).json({
        success: false,
        data: {
          message: "Server refused to connect!",
        },
      });
    switch (req.method) {
      case "GET":
        await verifyUser(req, res);
        break;
      case "POST":
        await createUser(req, res);
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(`Err at /users: ${error}`);

    res.status(400).json({
      success: false,
      data: {
        method: req.method,
        message: `Err at /users: ${error}`,
      },
    });
  }
}
