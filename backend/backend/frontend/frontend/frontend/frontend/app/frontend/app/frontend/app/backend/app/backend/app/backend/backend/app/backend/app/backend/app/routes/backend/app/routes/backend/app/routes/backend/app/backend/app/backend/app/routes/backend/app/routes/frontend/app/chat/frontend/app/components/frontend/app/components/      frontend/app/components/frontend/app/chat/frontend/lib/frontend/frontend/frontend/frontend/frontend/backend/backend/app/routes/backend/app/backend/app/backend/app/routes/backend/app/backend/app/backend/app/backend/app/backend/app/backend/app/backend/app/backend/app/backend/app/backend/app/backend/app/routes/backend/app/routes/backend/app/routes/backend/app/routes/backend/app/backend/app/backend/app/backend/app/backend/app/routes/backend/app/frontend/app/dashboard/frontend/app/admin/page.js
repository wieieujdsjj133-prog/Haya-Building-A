"use client";

import { useState } from "react";


export default function AdminPage() {

  const [system] = useState({
    name: "Haya Building A",
    version: "1.0.0",
    status: "Online",
    security: "Enabled"
  });


  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Haya Building A Admin Panel
      </h1>


      <div className="bg-gray-900 rounded-xl p-6 space-y-4">

        <div>
          <span className="text-gray-400">
            System:
          </span>

          <p className="text-xl">
            {system.name}
          </p>
        </div>


        <div>
          <span className="text-gray-400">
            Version:
          </span>

          <p className="text-xl">
            {system.version}
          </p>
        </div>


        <div>
          <span className="text-gray-400">
            Status:
          </span>

          <p className="text-green-400 text-xl">
            {system.status}
          </p>
        </div>


        <div>
          <span className="text-gray-400">
            Security:
          </span>

          <p className="text-xl">
            {system.security}
          </p>
        </div>


      </div>


      <div className="mt-8 bg-gray-900 rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-4">
          Management
        </h2>

        <ul className="space-y-2 text-gray-300">
          <li>✓ Users Management</li>
          <li>✓ AI Configuration</li>
          <li>✓ Plugin Management</li>
          <li>✓ System Monitoring</li>
        </ul>

      </div>

    </main>
  );
    }
