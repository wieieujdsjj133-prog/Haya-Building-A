"use client";

import { useState } from "react";

export default function DashboardPage() {

  const [stats] = useState({
    conversations: 0,
    files: 0,
    plugins: 0
  });


  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Haya Building A Dashboard
      </h1>


      <div className="grid md:grid-cols-3 gap-6">


        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-gray-400">
            Conversations
          </h2>

          <p className="text-3xl font-bold mt-3">
            {stats.conversations}
          </p>
        </div>


        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-gray-400">
            Files
          </h2>

          <p className="text-3xl font-bold mt-3">
            {stats.files}
          </p>
        </div>


        <div className="bg-gray-900 rounded-xl p-6">
          <h2 className="text-gray-400">
            Plugins
          </h2>

          <p className="text-3xl font-bold mt-3">
            {stats.plugins}
          </p>
        </div>


      </div>


      <div className="bg-gray-900 rounded-xl p-6 mt-8">

        <h2 className="text-2xl font-bold mb-4">
          AI System Status
        </h2>

        <p className="text-green-400">
          Haya Building A AI Online
        </p>

      </div>

    </main>
  );
    }
