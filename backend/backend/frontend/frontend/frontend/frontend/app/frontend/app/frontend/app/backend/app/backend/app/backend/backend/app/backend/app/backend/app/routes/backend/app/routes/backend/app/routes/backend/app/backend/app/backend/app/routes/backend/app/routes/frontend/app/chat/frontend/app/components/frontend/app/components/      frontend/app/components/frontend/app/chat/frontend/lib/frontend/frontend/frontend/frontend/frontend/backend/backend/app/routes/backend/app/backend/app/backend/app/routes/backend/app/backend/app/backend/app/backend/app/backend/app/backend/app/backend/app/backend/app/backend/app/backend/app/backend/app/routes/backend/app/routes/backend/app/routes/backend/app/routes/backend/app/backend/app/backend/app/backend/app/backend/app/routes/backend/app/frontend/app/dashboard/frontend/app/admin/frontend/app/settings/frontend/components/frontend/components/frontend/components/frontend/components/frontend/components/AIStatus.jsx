"use client";

import { useEffect, useState } from "react";


export default function AIStatus() {

  const [status, setStatus] = useState(
    "Checking..."
  );


  useEffect(() => {

    async function checkAI() {

      try {

        const response = await fetch(
          "http://localhost:8000/ai/info"
        );


        const data = await response.json();

        setStatus(
          data.status || "Online"
        );


      } catch (error) {

        setStatus(
          "Offline"
        );

      }

    }


    checkAI();

  }, []);


  return (
    <div className="bg-gray-900 text-white rounded-xl p-5">

      <h2 className="text-xl font-bold mb-3">
        Haya Building A AI Status
      </h2>


      <p className="text-green-400">
        {status}
      </p>


    </div>
  );
}
