import { connectDB } from "../../../lib/db";
import User from "../../../models/User";
import { signToken } from "../../../lib/auth";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  await connectDB();

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ error: "User not found" });

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) return res.status(400).json({ error: "Wrong password" });

  const token = signToken(user._id);

  res.json({ token });
}
