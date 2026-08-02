from fastapi import APIRouter, UploadFile, File
import os
import shutil
from datetime import datetime


router = APIRouter(
    prefix="/files",
    tags=["Files"]
)

UPLOAD_DIR = "uploads"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)


@router.post("/upload")
async def upload_file(
    file: UploadFile = File(...)
):
    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    return {
        "filename": file.filename,
        "status": "uploaded",
        "time": datetime.utcnow()
    }


@router.get("/")
async def list_files():
    files = os.listdir(UPLOAD_DIR)

    return {
        "files": files
    }
