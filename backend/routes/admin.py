from flask import Blueprint, request, jsonify
from extensions import db
from models import Product, User, Order
from routes.auth import admin_required

# ✅ Use a unique name for the admin blueprint
admin_bp = Blueprint("admin", __name__, url_prefix="/api/admin")


# Example: Get all users
@admin_bp.route("/users", methods=["GET"])
@admin_required
def get_users():
    users = User.query.all()
    return jsonify([
        {"id": u.id, "username": u.username, "email": u.email, "is_admin": u.is_admin}
        for u in users
    ])


# Example: Add a product
@admin_bp.route("/products", methods=["POST"])
@admin_required
def add_product():
    data = request.get_json()
    new_product = Product(
        name=data["name"],
        description=data.get("description", ""),
        price=data["price"],
        category=data.get("category", ""),
        stock=data.get("stock", 0),
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify({"message": "Product added successfully"}), 201


# Example: Update product
@admin_bp.route("/products/<int:product_id>", methods=["PUT"])
@admin_required
def update_product(product_id):
    product = Product.query.get_or_404(product_id)
    data = request.get_json()

    product.name = data.get("name", product.name)
    product.description = data.get("description", product.description)
    product.price = data.get("price", product.price)
    product.category = data.get("category", product.category)
    product.stock = data.get("stock", product.stock)

    db.session.commit()
    return jsonify({"message": "Product updated successfully"})


# Example: Delete product
@admin_bp.route("/products/<int:product_id>", methods=["DELETE"])
@admin_required
def delete_product(product_id):
    product = Product.query.get_or_404(product_id)
    db.session.delete(product)
    db.session.commit()
    return jsonify({"message": "Product deleted successfully"})


# Example: View all orders
@admin_bp.route("/orders", methods=["GET"])
@admin_required
def get_orders():
    orders = Order.query.all()
    return jsonify([
        {
            "id": o.id,
            "user_id": o.user_id,
            "total_price": float(o.total_price),
            "status": o.status,
        }
        for o in orders
    ])
