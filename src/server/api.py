from flask import Blueprint, request, make_response, jsonify
from src.server.db import db
from src.server.db.models import *

api = Blueprint('api', __name__)

db.connect()
if not User.table_exists():
    db.create_tables([
        User,
    ])


@api.route('/auth/', methods=['POST'])
def auth():
    data = request.get_json()
    auth_type = data['auth_type']

    if auth_type == 'up':
        return new_user(data['email'], data['password'])
    elif auth_type == 'in':
        return sign_in(data['email'], data['password'])


def new_user(email, password):
    user = User(email=email, password=password)
    try:
        user.make_token()
        user.save()
        return jsonify({
            'email': user.email,
            'token': user.token,
        }), 201
    except IntegrityError:
        return jsonify({
            'error': 'User already exists',
        }), 400


def sign_in(email, password):
    user = User.select().where(User.email == email).get()
    if user and user.password == password:
        user.make_token()
        user.save()
        return jsonify({
            'email': user.email,
            'token': user.token,
        }), 200
    else:
        return jsonify({
            'error': 'User not found',
        }), 404


def sign_out(email):
    user = User.select().where(User.email == email).get()
    if user:
        user.token = None
        user.save()
