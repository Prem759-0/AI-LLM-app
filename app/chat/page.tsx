"use client";

import Sidebar from "@/components/Sidebar";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { useStore } from "@/store/useStore";

export default function Chat() {
  const { messages, addMessage, updateLastMessage } = useStore();

  const sendMessage = async (text) => {
    addMessage({ role: "user", content: text });
    addMessage({ role: "ai", content: "" });

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: text }),
      headers: { "Content-Type": "application/json" }
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let fullText = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);

      const lines = chunk.split("\n");

      for (let line of lines) {
        if (!line.startsWith("data:")) continue;

        const json = line.replace("data:", "").trim();

        if (json === "[DONE]") continue;

        try {
          const parsed = JSON.parse(json);
          const content = parsed.choices?.[0]?.delta?.content;

          if (content) {
            fullText += content;
            updateLastMessage(fullText);
          }
        } catch {}
      }
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto p-6">
          {messages.length === 0 ? (
            <div className="text-center mt-40 text-gray-400">
              <h1 className="text-3xl mb-2">Hello 👋</h1>
              <p>How can I assist you today?</p>
            </div>
          ) : (
            messages.map((m, i) => (
              <ChatMessage key={i} {...m} />
            ))
          )}
        </div>

        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}
