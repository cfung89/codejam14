import json
import os
import certifi
from dotenv import load_dotenv

from pymongo import MongoClient


# def mongoAdd(request: dict, hour: str):
#     print("HOUR2", hour)
#     ca = certifi.where()
#     load_dotenv()

#     MONGO_URI = os.getenv("MONGODB_URI")
#     client = MongoClient(MONGO_URI, tlsCAFile=ca)

#     db = client.parkingdb
#     collection = db.locs
#     doc = collection.find_one({"lat": request["lat"], "long": request["long"]})
#     if doc:
#         print("doc", doc)
#         temp = doc
#         temp["freq"][hour] = int(doc["freq"][hour]) + 1
#         print(temp["freq"][hour])
#         collection.update_one(
#             {"lat": request["lat"], "long": request["long"]},
#             {"$inc": {f"freq.{hour}": 1}},
#         )
#     else:
#         temp = request
#         temp["freq"] = {
#             "00": 0,
#             "01": 0,
#             "02": 0,
#             "03": 0,
#             "04": 0,
#             "05": 0,
#             "06": 0,
#             "07": 0,
#             "08": 0,
#             "09": 0,
#             "10": 0,
#             "11": 0,
#             "12": 0,
#             "13": 0,
#             "14": 0,
#             "15": 0,
#             "16": 0,
#             "17": 0,
#             "18": 0,
#             "19": 0,
#             "20": 0,
#             "21": 0,
#             "22": 0,
#             "23": 0,
#         }
#         collection.insert_one(temp)

#     client.close()
#     return


def mongoAdd(request: dict, hour: str):
    a = []
    with open("data.json", "r") as f:
        a = json.load(f)
        temp = request
        temp["freq"] = {
            "00": 0,
            "01": 0,
            "02": 0,
            "03": 0,
            "04": 0,
            "05": 0,
            "06": 0,
            "07": 0,
            "08": 0,
            "09": 0,
            "10": 0,
            "11": 0,
            "12": 0,
            "13": 0,
            "14": 0,
            "15": 0,
            "16": 0,
            "17": 0,
            "18": 0,
            "19": 0,
            "20": 0,
            "21": 0,
            "22": 0,
            "23": 0,
        }
        a.append()
    with open("data.json", "w") as f:
        f.write(json.dumps(a))
    return
