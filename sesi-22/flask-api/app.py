from flask import Flask
from flask_cors import CORS

app= Flask(__name__)
CORS(app)

@app.route('/hello') # * -->endpoint
def say_hello_world(): # ? --> function say_hello_word
    return {'result': " Hallo FSD 3 OCBC NISP"}