from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# POST location
@app.route('/location', methods=['POST'])
def location():
    response = request.get_json()
    coords = {
        "Latitude": response.get('latitude'),
        "Longitude": response.get('longitude')
    }
    print(coords)
    return jsonify(coords), 200

# POST picture
@app.route('/report', methods=['POST'])
def report():
    response = request.get_json()
    image = response.get('img')
    print(image)
    return jsonify(image), 200

# POST free spots
@app.route('/free', methods=['POST'])
def freeSpots():
    response = request.get_json()
    spots = response.get('freeSpots')
    print(spots)
    return jsonify(spots), 200

if __name__ == "__main__":
    app.run(debug=True)
