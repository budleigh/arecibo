import uuid
from peewee import *
from src.server.db import db


class BaseModel(Model):
    class Meta:
        database = db


class User(BaseModel):
    email = CharField(unique=True)
    password = CharField(max_length=255)
    token = CharField(max_length=100, null=True)

    def make_token(self):
        self.token = str(uuid.uuid4())
