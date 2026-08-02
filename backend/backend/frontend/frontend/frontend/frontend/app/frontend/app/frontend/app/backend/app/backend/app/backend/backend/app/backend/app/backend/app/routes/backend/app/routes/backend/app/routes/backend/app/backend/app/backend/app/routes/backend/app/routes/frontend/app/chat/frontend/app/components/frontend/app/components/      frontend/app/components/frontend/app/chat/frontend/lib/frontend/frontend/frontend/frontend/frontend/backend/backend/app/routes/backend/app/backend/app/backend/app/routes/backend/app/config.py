from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    APP_NAME: str = "Haya Building A"
    APP_VERSION: str = "1.0.0"

    APP_ENV: str = "development"
    APP_DEBUG: bool = True

    DATABASE_URL: str = (
        "postgresql://postgres:password@db:5432/haya_building_a"
    )

    JWT_SECRET: str = "change-this-secret"
    JWT_ALGORITHM: str = "HS256"

    OPENAI_API_KEY: str = ""

    MAX_UPLOAD_SIZE: int = 10485760

    class Config:
        env_file = ".env"


settings = Settings()
