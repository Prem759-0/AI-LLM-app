"use client";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#181818] h-full p-4 flex flex-col">
      <h2 className="text-xl mb-4">Cortex</h2>

      <button className="bg-white text-black rounded p-2 mb-4">
        + New Chat
      </button>

      <div className="text-gray-400 text-sm">No chats yet</div>
    </div>
  );
}
