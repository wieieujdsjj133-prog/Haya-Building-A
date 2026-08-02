from fastapi import FastAPI

from .routes import (
    chat,
    users,
    files,
    auth,
    ai,
    search,
    settings,
    admin
)

from .middleware import RequestLoggerMiddleware
from .exceptions import (
    HayaException,
    haya_exception_handler
)


app = FastAPI(
    title="Haya Building A",
    description="Advanced AI Platform",
    version="1.0.0"
)


# Middleware
app.add_middleware(
    RequestLoggerMiddleware
)


# Error Handler
app.add_exception_handler(
    HayaException,
    haya_exception_handler
)


# API Routes
app.include_router(chat.router)
app.include_router(users.router)
app.include_router(files.router)
app.include_router(auth.router)
app.include_router(ai.router)
app.include_router(search.router)
app.include_router(settings.router)
app.include_router(admin.router)


@app.get("/")
async def root():

    return {
        "project": "Haya Building A",
        "status": "online",
        "message": "AI Platform Running"
    }


@app.get("/health")
async def health():

    return {
        "status": "healthy"
}
