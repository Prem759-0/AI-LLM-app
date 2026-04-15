import { motion } from "framer-motion";

export default function ChatMessage({ role, content }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mb-4 flex ${role === "user" ? "justify-end" : "justify-start"}`}
    >
      <div className="glass px-4 py-2 max-w-[70%]">
        {content}
      </div>
    </motion.div>
  );
}
