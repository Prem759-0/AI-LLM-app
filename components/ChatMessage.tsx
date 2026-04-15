export default function ChatMessage({ role, content }) {
  return (
    <div className={`mb-6 flex ${role === "user" ? "justify-end" : "justify-start"}`}>
      <div className="glass px-4 py-3 max-w-[65%] text-sm leading-relaxed">
        {content}
      </div>
    </div>
  );
}
