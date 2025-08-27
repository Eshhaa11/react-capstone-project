from functools import wraps
from flask import request, jsonify
from flask_jwt_extended import verify_jwt_in_request, get_jwt

from flask import Blueprint
auth_bp = Blueprint("auth", __name__, url_prefix="/api/auth")

# --- ADMIN REQUIRED DECORATOR ---
def admin_required(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        try:
            verify_jwt_in_request()  # make sure token is valid
            claims = get_jwt()
            if claims.get("role") != "admin":
                return jsonify({"error": "Admins only!"}), 403
        except Exception as e:
            return jsonify({"error": str(e)}), 401
        return fn(*args, **kwargs)
    return wrapper


# Example login route (you may already have this)
@auth_bp.route("/login", methods=["POST"])
def login():
    return jsonify({"message": "login route working"})
