from datetime import datetime


class AIMemory:

    def __init__(self):
        self.history = []


    def add_message(
        self,
        role: str,
        content: str
    ):

        self.history.append(
            {
                "role": role,
                "content": content,
                "time": datetime.utcnow()
            }
        )


    def get_history(self):

        return self.history


    def clear(self):

        self.history = []


    def get_context(self):

        context = ""

        for message in self.history:
            context += (
                f"{message['role']}: "
                f"{message['content']}\n"
            )

        return context


memory = AIMemory()
