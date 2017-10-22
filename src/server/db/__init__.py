import os
from peewee import SqliteDatabase

db = SqliteDatabase(
    os.path.join(
        os.path.dirname(os.path.realpath(__file__)),
        'template.db'
    )
)
