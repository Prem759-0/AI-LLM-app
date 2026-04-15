export const askAI = async (message: string) => {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "google/gemma-4-26b-a4b-it",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await res.json();
  return data.choices[0].message.content;
};
