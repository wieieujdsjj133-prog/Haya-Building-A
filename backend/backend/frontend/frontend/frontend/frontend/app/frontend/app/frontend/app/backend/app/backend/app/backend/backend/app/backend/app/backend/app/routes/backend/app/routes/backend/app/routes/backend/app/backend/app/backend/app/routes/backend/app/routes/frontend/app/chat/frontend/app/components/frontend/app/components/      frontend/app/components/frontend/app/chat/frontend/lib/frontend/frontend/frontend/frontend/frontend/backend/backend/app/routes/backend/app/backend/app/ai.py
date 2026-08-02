import os
from dotenv import load_dotenv

load_dotenv()


class AIEngine:
    def __init__(self):
        self.name = "Haya Building A AI"
        self.version = "1.0.0"

        self.api_key = os.getenv(
            "OPENAI_API_KEY"
        )

    async def generate_response(
        self,
        message: str
    ):

        if not message.strip():
            return "Please enter a message."

        # هنا سيتم ربط النموذج اللغوي الحقيقي
        # مثل نموذج محلي أو API

        response = {
            "assistant": self.name,
            "message": (
                "تم استلام رسالتك: "
                + message
            ),
            "status": "ready"
        }

        return response["message"]


    def get_info(self):

        return {
            "name": self.name,
            "version": self.version,
            "status": "online"
        }


ai_engine = AIEngine()
