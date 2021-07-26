from flask import Flask, jsonify, request
from dotenv import load_dotenv
from flask_cors import CORS
import os, requests, json
from datetime import date

load_dotenv()
app = Flask(__name__)
CORS(app)

api_key = os.environ['API_KEY']


def get_json_data():
    with open('data.json') as f:
        data = json.load(f)
        data = data['data']
    
    return data


def post_json_data(data):
    with open('data.json', 'w') as outfile:
        json.dump(data, outfile)


@app.route('/')
def index():
    return "Journal My Life Backend API"


get_url = '/api/v1/token=' + api_key
@app.route(get_url, methods=['GET'])
def get():
    data = get_json_data()
    return jsonify({"data": data})


@app.route("/<email>", methods=['GET'])
def get_data_using_email(email):
    data = get_json_data()
    for user in data:
        if user['email'] == email:
            return jsonify({"data": user})
    
    return jsonify({})


def user_exists(email) -> bool:
    for item in get_json_data():
        if email == item['email']:
            return True
    
    return False


def get_last_journal_id(users) -> int:
    max_id = 1
    for user in users:
        journals = user['journals']
        for journal in journals:
            max_id = max(journal['id'], max_id)
    
    return max_id


post_url = '/api/v1/token=' + api_key
@app.route(post_url, methods=['POST'])
def create():
    obj = request.get_json()
    object_email = obj['email']

    users = get_json_data()

    if "title" not in obj:
        if not user_exists(object_email):
            users.append(obj)
    else:
        today = date.today().strftime("%d-%m-%Y")
        for user in users:
            if user['email'] == object_email:
                d = {
                    "title": obj['title'],
                    "text": obj['text'],
                    "date": today,
                    "isPrivate": obj['isPrivate'],
                    "author": obj['author'],
                    "id": get_last_journal_id(users)+1
                }
                user['journals'].append(d)

    post_json_data({"data": users})
    return jsonify({"data": users})


if __name__ == '__main__':
    app.run(debug=False)
