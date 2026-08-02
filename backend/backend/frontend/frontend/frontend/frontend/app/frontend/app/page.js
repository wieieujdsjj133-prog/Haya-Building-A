export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          Haya Building A
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          A modern AI platform designed for intelligent conversations,
          coding assistance, and creative solutions.
        </p>

        <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            AI Assistant
          </h2>

          <p className="text-gray-400">
            Welcome to Haya Building A. Your intelligent assistant is ready.
          </p>
        </div>
      </div>
    </main>
  );
    }
