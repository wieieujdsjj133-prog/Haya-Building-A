"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    joined: ""
  });

  useEffect(() => {

    async function loadProfile() {

      try {

        const response = await fetch(
          "http://localhost:8000/users/me"
        );

        if (!response.ok) {
          throw new Error("Failed to load profile");
        }

        const data = await response.json();

        setUser({
          username: data.username || "",
          email: data.email || "",
          joined: data.joined || "Unknown"
        });

      } catch (error) {

        console.error(error);

      }

    }

    loadProfile();

  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-6">
          My Profile
        </h1>

        <div className="space-y-5">

          <div>
            <p className="text-gray-400">
              Username
            </p>

            <p className="text-xl">
              {user.username}
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Email
            </p>

            <p className="text-xl">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Member Since
            </p>

            <p className="text-xl">
              {user.joined}
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}
