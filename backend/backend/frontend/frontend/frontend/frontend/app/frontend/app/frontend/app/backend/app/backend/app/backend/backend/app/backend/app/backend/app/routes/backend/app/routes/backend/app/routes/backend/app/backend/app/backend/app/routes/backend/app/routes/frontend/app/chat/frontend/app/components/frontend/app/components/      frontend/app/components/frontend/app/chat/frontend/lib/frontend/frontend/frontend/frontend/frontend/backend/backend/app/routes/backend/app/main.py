from fastapi import FastAPI

from .routes import chat
from .routes import users
from .routes import files
from .routes import auth


app = FastAPI(
    title="Haya Building A",
    description="Modern AI Platform API",
    version="1.0.0"
)


# تسجيل المسارات
app.include_router(
    chat.router
)

app.include_router(
    users.router
)

app.include_router(
    files.router
)

app.include_router(
    auth.router
)


@app.get("/")
async def root():
    return {
        "project": "Haya Building A",
        "status": "online",
        "message": "AI Platform is running"
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }
