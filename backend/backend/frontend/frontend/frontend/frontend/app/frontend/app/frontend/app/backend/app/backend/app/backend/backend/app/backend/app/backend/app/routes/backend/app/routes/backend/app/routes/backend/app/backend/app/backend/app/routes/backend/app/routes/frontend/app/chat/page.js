"use client";

import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [
      ...prev,
      userMessage
    ]);

    try {
      const response = await fetch(
        "http://localhost:8000/chat/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: message,
          }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);

    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Connection error",
        },
      ]);
    }

    setMessage("");
  }


  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        Haya Building A AI
      </h1>

      <div className="bg-gray-900 rounded-xl p-4 h-[500px] overflow-y-auto mb-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className="mb-3"
          >
            <b>
              {msg.role}:
            </b>

            <p>
              {msg.content}
            </p>
          </div>
        ))}

      </div>


      <div className="flex gap-2">

        <input
          className="flex-1 bg-gray-800 p-3 rounded-lg"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="اكتب رسالتك..."
        />

        <button
          className="bg-white text-black px-6 rounded-lg"
          onClick={sendMessage}
        >
          إرسال
        </button>

      </div>

    </main>
  );
  }
