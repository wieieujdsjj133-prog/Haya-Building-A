"use client";

import Link from "next/link";


export default function Navbar() {

  return (
    <nav className="w-full bg-gray-950 text-white p-4 border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center">


        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Haya Building A
        </Link>


        <div className="flex gap-5 text-gray-300">


          <Link href="/chat">
            Chat
          </Link>


          <Link href="/dashboard">
            Dashboard
          </Link>


          <Link href="/settings">
            Settings
          </Link>


          <Link href="/admin">
            Admin
          </Link>


        </div>


      </div>

    </nav>
  );
}
