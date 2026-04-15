import { connectDB } from "../../../lib/db";
import User from "../../../models/User";
import { signToken } from "../../../lib/auth";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await connectDB();

  const { email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed });

  const token = signToken(user._id);

  res.json({ token });
}
