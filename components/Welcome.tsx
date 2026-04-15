export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center mt-32 text-center">
      <div className="w-20 h-20 rounded-full bg-purple-500 blur-xl mb-4" />

      <h1 className="text-4xl font-semibold text-purple-300">
        Hello, Jackson
      </h1>

      <p className="text-gray-400 mt-2">
        How can I assist you today?
      </p>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="glass p-4 text-sm">Synthesize Data</div>
        <div className="glass p-4 text-sm">Creative Brainstorm</div>
        <div className="glass p-4 text-sm">Check Facts</div>
      </div>
    </div>
  );
}
