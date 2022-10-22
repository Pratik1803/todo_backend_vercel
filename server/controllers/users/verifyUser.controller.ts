import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "../../models/user.model";
const bcrypt = require("bcryptjs");

export async function verifyUser(req: NextApiRequest, res: NextApiResponse) {
  const result = await UserModel.findOne({ username: req.query.un });
  if (!result)
    return res.status(400).json({
      success: false,
      data: {
        message: "User not found!",
      },
    });

  const passwordCheck = await bcrypt.compare(req.query.pw, result.password);

  if (!passwordCheck)
    return res.status(400).json({
      success: false,
      data: {
        message: "Provided password is incorrect!",
      },
    });
  res.status(201).json({
    success: true,
    data: result,
  });
}
