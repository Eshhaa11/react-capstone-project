import os

class Config:
    # Flask secret key (used for sessions)
    SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret")

    # Database config
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "postgresql://postgres:3031@localhost:5432/smartshop"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # JWT config (important for token verification)
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "my-fixed-jwt-secret")

    # Mail config
    MAIL_SERVER = os.getenv("MAIL_SERVER", "localhost")
    MAIL_PORT = int(os.getenv("MAIL_PORT", 25))
    MAIL_USE_TLS = os.getenv("MAIL_USE_TLS", "false").lower() == "true"
    MAIL_USERNAME = os.getenv("MAIL_USERNAME")
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
    MAIL_DEFAULT_SENDER = os.getenv("MAIL_DEFAULT_SENDER", "noreply@example.com")
