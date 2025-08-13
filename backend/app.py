import os
from dotenv import load_dotenv
load_dotenv()

from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import db, migrate, jwt, mail

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    mail.init_app(app)

    @app.route("/api/health")
    def health():
        return {"status": "ok"}

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
