"use client";

import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 h-full p-4 glass flex flex-col gap-4"
    >
      <div className="text-xl font-bold">Cortex</div>

      <button className="bg-black text-white rounded-xl p-2">
        + New chat
      </button>

      <input
        placeholder="Search"
        className="p-2 rounded-lg bg-transparent border border-gray-600"
      />

      <div className="text-gray-400 text-sm mt-4">
        No chats yet
      </div>
    </motion.div>
  );
}
