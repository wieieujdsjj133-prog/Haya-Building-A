from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Haya Building A",
    description="Modern AI Platform API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "name": "Haya Building A",
        "version": "1.0.0",
        "status": "online",
        "message": "Welcome to Haya Building A API"
    }

@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }

@app.get("/api/info")
async def info():
    return {
        "project": "Haya Building A",
        "framework": "FastAPI",
        "language": "Python"
}
