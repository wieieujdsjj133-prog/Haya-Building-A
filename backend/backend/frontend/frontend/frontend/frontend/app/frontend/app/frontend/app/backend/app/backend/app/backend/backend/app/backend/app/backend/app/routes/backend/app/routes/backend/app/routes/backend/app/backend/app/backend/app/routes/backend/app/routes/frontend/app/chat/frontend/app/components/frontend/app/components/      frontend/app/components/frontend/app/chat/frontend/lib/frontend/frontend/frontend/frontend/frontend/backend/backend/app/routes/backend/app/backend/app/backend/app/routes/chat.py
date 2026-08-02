from fastapi import APIRouter
from datetime import datetime

from ..ai import ai_engine
from ..schemas import ChatRequest, ChatResponse


router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"]
)


@router.post("/", response_model=ChatResponse)
async def chat(
    request: ChatRequest
):

    ai_response = await ai_engine.generate_response(
        request.message
    )

    return ChatResponse(
        response=ai_response,
        created_at=datetime.utcnow()
    )


@router.get("/info")
async def ai_info():

    return ai_engine.get_info()


@router.get("/status")
async def chat_status():

    return {
        "service": "Haya Building A AI",
        "status": "online"
    }
