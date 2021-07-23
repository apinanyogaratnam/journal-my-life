from flask import Flask, jsonify
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.environ['API_KEY']

app = Flask(__name__)

sample_json_data = [
    {"firstname": "Apinan",
    "lastname": "Yogaratnam",
    "username": "apinanyogaratnam",
    "email": "email@email.com"
    },
    {"firstname": "Apinan",
    "lastname": "Yogaratnam",
    "username": "apinanyogaratnam",
    "email": "email@email.com"
    }
]

@app.route('/')
def index():
    return "Journal My Life Backend API"


@app.route('/api/v1/token=' + api_key, methods=['GET'])
def get():
    return jsonify({"data": sample_json_data})


if __name__ == '__main__':
    app.run(debug=False)
