const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:8000";


export async function sendChatMessage(message) {

  const response = await fetch(
    `${API_URL}/chat/`,
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


  if (!response.ok) {
    throw new Error(
      "Failed to send message"
    );
  }


  return await response.json();
}


export async function getHealthStatus() {

  const response = await fetch(
    `${API_URL}/health`
  );

  return await response.json();
}
