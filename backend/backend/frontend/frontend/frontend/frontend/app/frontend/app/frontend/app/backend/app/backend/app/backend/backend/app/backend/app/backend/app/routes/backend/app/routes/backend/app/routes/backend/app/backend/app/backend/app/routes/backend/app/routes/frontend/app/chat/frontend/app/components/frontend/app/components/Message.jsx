"use client";

export default function Message({
  role,
  content
}) {

  const isAI = role === "assistant";

  return (
    <div
      className={`flex mb-4 ${
        isAI
          ? "justify-start"
          : "justify-end"
      }`}
    >

      <div
        className={`max-w-[80%] rounded-xl p-3 ${
          isAI
            ? "bg-gray-800 text-white"
            : "bg-white text-black"
        }`}
      >

        <div className="text-xs opacity-60 mb-1">
          {isAI ? "Haya AI" : "You"}
        </div>

        <p>
          {content}
        </p>

      </div>

    </div>
  );
}
