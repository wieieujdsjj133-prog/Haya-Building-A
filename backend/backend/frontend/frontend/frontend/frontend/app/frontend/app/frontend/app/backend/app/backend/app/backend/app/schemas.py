from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional


# User Schemas

class UserCreate(BaseModel):
    username: str
    email: str
    password: str


class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    created_at: datetime

    class Config:
        from_attributes = True


# Message Schemas

class MessageCreate(BaseModel):
    content: str


class MessageResponse(BaseModel):
    id: int
    role: str
    content: str
    created_at: datetime

    class Config:
        from_attributes = True


# Conversation Schemas

class ConversationCreate(BaseModel):
    title: Optional[str] = "New Conversation"


class ConversationResponse(BaseModel):
    id: int
    title: str
    created_at: datetime
    messages: List[MessageResponse] = []

    class Config:
        from_attributes = True


# AI Chat

class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    response: str
    created_at: datetime
