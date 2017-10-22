import os
from flask import Flask, render_template
from src.server.api import api

app = Flask(__name__)
app.register_blueprint(api)
app.config['DEBUG'] = True


@app.route('/')
def root():
    return render_template('root.html')


if __name__ == '__main__':
    app.run()
