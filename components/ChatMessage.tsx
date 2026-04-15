export default function ChatMessage({ role, content }) {
  return (
    <div className={`mb-4 ${role === "user" ? "text-right" : "text-left"}`}>
      <div className="inline-block bg-[#222] p-3 rounded-xl max-w-[70%]">
        {content}
      </div>
    </div>
  );
}
