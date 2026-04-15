import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center mt-40 text-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="w-20 h-20 rounded-full bg-purple-500 mb-4"
      />

      <h1 className="text-3xl font-semibold text-purple-300">
        Hello, Jackson
      </h1>

      <p className="text-gray-400 mt-2">
        How can I assist you today?
      </p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="glass p-4">Synthesize Data</div>
        <div className="glass p-4">Creative Brainstorm</div>
        <div className="glass p-4">Check Facts</div>
      </div>
    </div>
  );
}
