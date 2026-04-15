"use client";

import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  return (
    <div className="p-4 flex justify-center">
      <div className="glass w-full max-w-3xl p-3">

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full bg-transparent resize-none outline-none"
        />

        <div className="flex justify-end mt-2">
          <button
            className="bg-purple-500 text-white px-4 py-1 rounded-lg"
            onClick={() => {
              onSend(input);
              setInput("");
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
