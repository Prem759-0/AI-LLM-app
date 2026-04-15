"use client";

import { useState } from "react";
import { Paperclip, Mic } from "lucide-react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  return (
    <div className="p-4 flex justify-center">
      <div className="glass w-full max-w-3xl flex flex-col p-3 gap-2">
        
        <textarea
          rows={1}
          className="bg-transparent resize-none"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="hover:bg-white/10 p-2 rounded-lg">
              <Paperclip size={16} />
            </button>

            <button className="hover:bg-white/10 p-2 rounded-lg">
              <Mic size={16} />
            </button>
          </div>

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
    </div>
  );
}
