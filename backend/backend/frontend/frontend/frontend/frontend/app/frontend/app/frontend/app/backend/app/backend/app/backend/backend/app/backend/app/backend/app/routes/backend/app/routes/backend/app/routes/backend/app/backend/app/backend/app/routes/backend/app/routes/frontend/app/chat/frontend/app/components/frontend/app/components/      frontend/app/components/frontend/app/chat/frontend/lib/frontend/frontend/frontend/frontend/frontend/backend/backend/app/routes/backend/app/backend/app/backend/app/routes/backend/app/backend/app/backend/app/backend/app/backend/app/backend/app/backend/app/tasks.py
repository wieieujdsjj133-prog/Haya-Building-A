from datetime import datetime
import asyncio


class TaskManager:

    def __init__(self):
        self.tasks = []


    async def run_task(
        self,
        name: str,
        function,
        *args,
        **kwargs
    ):

        task = {
            "name": name,
            "status": "running",
            "started": datetime.utcnow()
        }

        self.tasks.append(task)

        try:

            result = await function(
                *args,
                **kwargs
            )

            task["status"] = "completed"
            task["result"] = result

            return result


        except Exception as error:

            task["status"] = "failed"
            task["error"] = str(error)

            return None



    def list_tasks(self):

        return self.tasks


task_manager = TaskManager()
