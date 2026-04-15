"use client";

export default function Sidebar() {
  return (
    <div className="w-64 h-full glass p-4 flex flex-col justify-between fade-in">

      <div>
        <div className="text-lg font-semibold mb-4">Cortex</div>

        <button className="w-full bg-black text-white rounded-lg py-2 mb-4">
          + New chat
        </button>

        <input
          placeholder="Search"
          className="w-full p-2 rounded-lg border border-gray-200 bg-white/50"
        />

        <div className="mt-6 text-sm text-gray-500">
          No chats yet
        </div>
      </div>

      <div className="text-sm">
        <div>User</div>
        <div className="text-gray-400 text-xs">email@gmail.com</div>
      </div>
    </div>
  );
}
