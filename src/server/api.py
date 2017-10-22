from flask import Blueprint, request, abort
from src.server.db import db
from src.server.db.models import *

api = Blueprint('api', __name__)

db.connect()
if not User.table_exists():
    db.create_tables([
        User,
    ])


@api.route('/user/new', methods=['POST'])
def user_new():
    data = request.get_json()
    email = data['email']
    password = data['password']

    new_user = User(email=email, password=password)
    try:
        new_user.save()
    except IntegrityError:
        abort(400)


@api.route('/user/login', methods=['POST'])
def user_login():
    data = request.get_json()
    email = data['email']
    password = data['password']


@api.route('/user/logout', methods=['POST'])
def user_logout():
    data = request.get_json()
    email = data['email']
    token = data['token']
