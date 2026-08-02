"use client";

import { useState } from "react";


export default function FileUpload() {

  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");


  async function uploadFile() {

    if (!file) {
      setStatus("اختر ملفًا أولاً");
      return;
    }


    const formData = new FormData();

    formData.append(
      "file",
      file
    );


    try {

      const response = await fetch(
        "http://localhost:8000/files/upload",
        {
          method: "POST",
          body: formData
        }
      );


      const data = await response.json();

      setStatus(
        data.status || "تم الرفع"
      );


    } catch (error) {

      setStatus(
        "حدث خطأ أثناء الرفع"
      );

    }

  }


  return (
    <div className="bg-gray-900 p-6 rounded-xl text-white">


      <h2 className="text-2xl font-bold mb-4">
        Upload File
      </h2>


      <input
        type="file"
        className="mb-4"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />


      <button
        onClick={uploadFile}
        className="bg-white text-black px-5 py-2 rounded-lg"
      >
        Upload
      </button>


      <p className="mt-4 text-gray-400">
        {status}
      </p>


    </div>
  );
}
