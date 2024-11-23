from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# POST location
@app.route('/location', methods=['POST'])
def location():
    response = request.get_json()
    coords = {
        "Latitude": response.get('Latitude'),
        "Longitude": response.get('Longitude')
    }
    return jsonify(coords), 200

# POST picture
@app.route('/report', methods=['POST'])
def report():
    response = request.get_json()
    image = response.get('img')
    return jsonify(image), 200

if __name__ == "__main__":
    app.run(debug=True)