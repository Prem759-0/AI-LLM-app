"use client";

import { Download, Crown } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-white/10">
      <div className="text-lg font-semibold">Cortex</div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-3 py-1 rounded-lg border border-white/10 hover:bg-white/10">
          <Download size={16} />
          Export chat
        </button>

        <button className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black hover:bg-gray-800">
          <Crown size={16} />
          Upgrade
        </button>
      </div>
    </div>
  );
}
