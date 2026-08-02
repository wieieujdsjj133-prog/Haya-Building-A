from fastapi import APIRouter
from datetime import datetime

from ..ai import ai_engine
from ..schemas import ChatRequest, ChatResponse


router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"]
)


@router.post("/")
async def chat(
    request: ChatRequest
):
    response = await ai_engine.generate_response(
        request.message
    )

    return ChatResponse(
        response=response,
        created_at=datetime.utcnow()
    )


@router.get("/status")
async def chat_status():
    return {
        "service": "Haya Building A AI",
        "status": "online"
    }
