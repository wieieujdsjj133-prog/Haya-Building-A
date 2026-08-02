"use client";

export default function ChatBox({
  messages
}) {

  return (
    <div className="bg-gray-900 rounded-xl p-5 h-[500px] overflow-y-auto">

      {messages.length === 0 && (
        <p className="text-gray-400 text-center">
          ابدأ محادثة مع Haya Building A AI
        </p>
      )}


      {messages.map((message, index) => (

        <div
          key={index}
          className="mb-4"
        >

          <div className="text-sm text-gray-400">
            {message.role}
          </div>

          <div className="bg-gray-800 rounded-lg p-3 mt-1">
            {message.content}
          </div>

        </div>

      ))}

    </div>
  );
}
