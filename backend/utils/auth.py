from flask import Blueprint, request, jsonify
from extensions import db
from models import User
from flask_jwt_extended import (
    create_access_token, jwt_required, get_jwt_identity
)

auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")

# Signup
@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()

    if not data or not data.get("username") or not data.get("email") or not data.get("password"):
        return jsonify({"error": "Missing required fields"}), 400

    if User.query.filter((User.username == data["username"]) | (User.email == data["email"])).first():
        return jsonify({"error": "User already exists"}), 400

    user = User(username=data["username"], email=data["email"])
    user.set_password(data["password"])
    db.session.add(user)
    db.session.commit()

    # JWT requires subject to be a string
    token = create_access_token(identity=str(user.id))

    return jsonify({
        "message": "User created successfully",
        "access_token": token
    }), 201


# Login
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if not data or not data.get("email") or not data.get("password"):
        return jsonify({"error": "Missing email or password"}), 400

    user = User.query.filter_by(email=data["email"]).first()
    if not user or not user.check_password(data["password"]):
        return jsonify({"error": "Invalid credentials"}), 401

    token = create_access_token(identity=str(user.id))  # cast ID to string
    return jsonify({"access_token": token}), 200


# Get current user
@auth_bp.route("/me", methods=["GET"])
@jwt_required()
def me():
    user_id = get_jwt_identity()  # this will be a string
    user = User.query.get(int(user_id))  # convert back to int for DB query

    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "is_admin": user.is_admin
    })
