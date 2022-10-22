import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "../../models/user.model";

export async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const newUser = new UserModel(req.body);
  const result = await newUser.save();
  res.status(201).json({
    success: true,
    data: result,
  });
}
