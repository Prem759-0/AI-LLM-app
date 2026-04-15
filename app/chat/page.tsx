"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, addMessage } = useStore();

  const send = async () => {
    addMessage({ role: "user", content: input });

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
      headers: { "Content-Type": "application/json" }
    });

    const data = await res.json();

    addMessage({ role: "ai", content: data.reply });
    setInput("");
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex-1 overflow-auto p-4">
        {messages.map((m, i) => (
          <div key={i} className="mb-2">
            <b>{m.role}:</b> {m.content}
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-2">
        <input
          className="flex-1 bg-gray-800 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}
