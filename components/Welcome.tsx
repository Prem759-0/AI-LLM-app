export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center fade-in">

      <div className="w-24 h-24 rounded-full bg-purple-300 blur-2xl mb-6" />

      <h1 className="text-4xl font-semibold text-purple-400">
        Hello, Jackson
      </h1>

      <p className="text-gray-600 mt-2">
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
