import { askAI } from "../../lib/openrouter";

export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "google/gemma-4-26b-a4b-it",
      stream: true,
      messages: [{ role: "user", content: message }]
    })
  });

  res.setHeader("Content-Type", "text/event-stream");

if (!response.body) {
  res.status(500).json({ error: "No response body from AI" });
  return;
}

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  const chunk = decoder.decode(value);
  res.write(chunk);
}

res.end();
}
