"use client";

import { User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-full p-4 glass flex flex-col justify-between">
      <div>
        <div className="text-xl font-bold mb-4">Cortex</div>

        <button className="bg-black text-white rounded-xl p-2 w-full mb-4">
          + New chat
        </button>

        <input
          placeholder="Search"
          className="p-2 rounded-lg bg-transparent border border-white/10 w-full"
        />

        <div className="text-gray-400 text-sm mt-6">
          No chats yet
        </div>
      </div>

      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10">
        <User size={18} />
        <div>
          <div className="text-sm">User</div>
          <div className="text-xs text-gray-400">email@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
