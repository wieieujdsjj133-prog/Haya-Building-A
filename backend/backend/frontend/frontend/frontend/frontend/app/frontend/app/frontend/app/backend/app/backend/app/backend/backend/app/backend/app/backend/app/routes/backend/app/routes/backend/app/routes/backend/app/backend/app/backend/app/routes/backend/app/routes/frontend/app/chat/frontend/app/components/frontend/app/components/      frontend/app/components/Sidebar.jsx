"use client";

export default function Sidebar({
  conversations = [],
  onSelect
}) {

  return (
    <aside className="w-72 bg-gray-950 text-white h-screen p-4 border-r border-gray-800">

      <h2 className="text-xl font-bold mb-6">
        Haya Building A
      </h2>


      <button
        className="w-full bg-white text-black rounded-lg p-3 mb-5"
      >
        + محادثة جديدة
      </button>


      <div className="space-y-2">

        {conversations.length === 0 && (
          <p className="text-gray-500 text-sm">
            لا توجد محادثات
          </p>
        )}


        {conversations.map((item, index) => (

          <button
            key={index}
            onClick={() => onSelect?.(item)}
            className="w-full text-left bg-gray-900 hover:bg-gray-800 rounded-lg p-3"
          >
            {item.title || `محادثة ${index + 1}`}
          </button>

        ))}

      </div>

    </aside>
  );
}
