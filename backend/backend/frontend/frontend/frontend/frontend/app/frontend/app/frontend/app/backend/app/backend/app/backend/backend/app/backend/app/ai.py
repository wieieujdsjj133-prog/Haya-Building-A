import os
from dotenv import load_dotenv

load_dotenv()


class AIEngine:
    def __init__(self):
        self.name = "Haya Building A AI"
        self.version = "1.0.0"

        # مفتاح النموذج يوضع في ملف .env
        self.api_key = os.getenv("OPENAI_API_KEY")

    async def generate_response(self, message: str) -> str:
        """
        محرك الذكاء الاصطناعي الأساسي.
        سيتم ربطه لاحقًا بنموذج لغوي حقيقي.
        """

        if not message:
            return "Please enter a message."

        return (
            f"I am {self.name}. "
            f"You asked: {message}"
        )


ai_engine = AIEngine()
