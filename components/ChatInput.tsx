"use client";

import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  return (
    <div className="p-4 flex justify-center">
      <div className="glass w-full max-w-2xl flex p-3 gap-2">
        <input
          className="flex-1 bg-transparent"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="bg-purple-500 px-4 py-1 rounded-lg"
          onClick={() => {
            if (!input) return;
            onSend(input);
            setInput("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
