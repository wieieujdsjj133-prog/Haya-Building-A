from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_root():

    response = client.get("/")

    assert response.status_code == 200

    data = response.json()

    assert data["status"] == "online"



def test_health():

    response = client.get("/health")

    assert response.status_code == 200

    data = response.json()

    assert data["status"] == "healthy"



def test_ai_info():

    response = client.get("/ai/info")

    assert response.status_code == 200



def test_settings():

    response = client.get("/settings")

    assert response.status_code == 200



def test_search():

    response = client.get(
        "/search?q=FastAPI"
    )

    assert response.status_code == 200



def test_chat_endpoint():

    response = client.post(
        "/chat/",
        json={
            "message": "Hello"
        }
    )

    assert response.status_code == 200
