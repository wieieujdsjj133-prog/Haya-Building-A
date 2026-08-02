# Haya Building A

Haya Building A is a modern AI platform built with FastAPI and Next.js. It provides a clean architecture for creating AI-powered applications with authentication, file uploads, conversation history, and an extensible plugin system.

---

## Features

- AI Chat Interface
- User Authentication (JWT)
- Conversation History
- File Upload Support
- Plugin System
- Admin Dashboard
- Responsive UI
- Arabic & English Support
- REST API
- Docker Support

---

## Project Structure

```text
backend/
frontend/
docker/
.github/
README.md
docker-compose.yml
```

---

## Tech Stack

### Backend
- FastAPI
- Python 3.12+
- PostgreSQL
- SQLAlchemy
- JWT Authentication

### Frontend
- Next.js
- React
- Tailwind CSS

### DevOps
- Docker
- Docker Compose
- GitHub Actions

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/Haya-Building-A.git
```

Backend:

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

---

## Environment

Copy:

```text
backend/.env.example
```

to:

```text
backend/.env
```

and update your configuration values.

---

## License

MIT License

---

## Author

Developed for the Haya Building A project.
