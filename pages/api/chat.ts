import { askAI } from "@/lib/openrouter";

export default async function handler(req, res) {
  const { message } = req.body;

  const reply = await askAI(message);

  res.json({ reply });
}
