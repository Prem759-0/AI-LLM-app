"use client";

import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  return (
    <div className="p-4">
      <div className="bg-[#181818] rounded-xl flex p-3">
        <input
          className="flex-1 bg-transparent"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={() => {
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
