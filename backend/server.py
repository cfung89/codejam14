from flask import Flask, request, jsonify
from flask_cors import CORS
from mongoAdd import mongoAdd
from datetime import datetime


app = Flask(__name__)
CORS(app)


# POST location
@app.route("/report", methods=["POST"])
def report():
    response = request.get_json()
    location = response.get("Location")

    # parse date time
    timeSent = response.get("Time")
    hour = datetime.strptime(timeSent, "%m/%d/%Y, %I:%M:%S %p").strftime("%H")
    print("HOUR", hour)

    # print(location)
    # print(response.get("Image"))
    # print(response.get("NumFreeSpots"))
    data = {
        "lat": location["Latitude"],
        "long": location["Longitude"],
        "image": response.get("Image"),
        "free": response.get("NumFreeSpots"),
    }
    try:
        mongoAdd(data, hour)
    except Exception as e:
        print("Error: ", e)
        return jsonify([]), 400
    return jsonify(response), 200


if __name__ == "__main__":
    app.run(debug=True)
