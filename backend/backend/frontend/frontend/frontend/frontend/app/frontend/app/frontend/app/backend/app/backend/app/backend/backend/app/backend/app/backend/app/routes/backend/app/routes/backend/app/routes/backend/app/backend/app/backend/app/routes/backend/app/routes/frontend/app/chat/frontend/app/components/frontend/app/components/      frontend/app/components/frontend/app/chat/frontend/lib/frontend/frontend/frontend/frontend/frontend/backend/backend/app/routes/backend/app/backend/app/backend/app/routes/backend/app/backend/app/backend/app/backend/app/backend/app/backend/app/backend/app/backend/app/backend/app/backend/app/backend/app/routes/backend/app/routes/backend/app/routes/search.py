from fastapi import APIRouter, Query

from ..utils import clean_text


router = APIRouter(
    prefix="/search",
    tags=["Search"]
)


# بحث تجريبي - سيتم ربطه لاحقًا بمحرك بحث حقيقي
knowledge = [
    {
        "title": "Haya Building A",
        "content": "AI platform for conversations and automation"
    },
    {
        "title": "FastAPI",
        "content": "Backend framework for building APIs with Python"
    },
    {
        "title": "Next.js",
        "content": "Frontend framework for modern web applications"
    }
]


@router.get("/")
async def search(
    q: str = Query(...)
):

    query = clean_text(q).lower()

    results = []

    for item in knowledge:

        text = (
            item["title"] +
            " " +
            item["content"]
        ).lower()

        if query in text:
            results.append(item)


    return {
        "query": q,
        "results": results,
        "count": len(results)
    }
