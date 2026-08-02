"use client";

import { useState } from "react";


export default function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function registerUser(e) {

    e.preventDefault();


    try {

      const response = await fetch(
        "http://localhost:8000/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            username,
            email,
            password
          })
        }
      );


      const data = await response.json();

      console.log(data);


    } catch (error) {

      console.log(
        "Register error",
        error
      );

    }

  }


  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">


      <form
        onSubmit={registerUser}
        className="bg-gray-900 p-8 rounded-xl w-full max-w-md"
      >


        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Account
        </h1>


        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />


        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />


        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />


        <button
          className="w-full bg-white text-black p-3 rounded-lg"
          type="submit"
        >
          Register
        </button>


      </form>


    </div>
  );
        }
