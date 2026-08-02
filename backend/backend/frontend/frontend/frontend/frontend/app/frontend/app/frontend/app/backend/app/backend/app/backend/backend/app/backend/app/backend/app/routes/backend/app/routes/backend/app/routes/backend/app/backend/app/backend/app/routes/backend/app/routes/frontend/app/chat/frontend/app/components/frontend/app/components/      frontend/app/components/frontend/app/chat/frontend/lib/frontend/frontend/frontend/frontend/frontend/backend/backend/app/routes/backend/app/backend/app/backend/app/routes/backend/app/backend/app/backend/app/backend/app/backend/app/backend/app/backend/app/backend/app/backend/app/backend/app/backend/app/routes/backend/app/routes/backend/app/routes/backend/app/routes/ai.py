from fastapi import APIRouter

from ..ai import ai_engine
from ..memory import memory


router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.get("/info")
async def ai_info():

    return ai_engine.get_info()


@router.post("/remember")
async def remember(
    role: str,
    content: str
):

    memory.add_message(
        role,
        content
    )

    return {
        "status": "saved",
        "memory_size": len(
            memory.get_history()
        )
    }


@router.get("/memory")
async def get_memory():

    return {
        "history": memory.get_history()
    }


@router.delete("/memory")
async def clear_memory():

    memory.clear()

    return {
        "status": "memory cleared"
    }
