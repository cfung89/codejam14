import json
import uuid
from bson.objectid import ObjectId

import os
import certifi
from dotenv import load_dotenv

from pymongo import MongoClient
from random import randint


# def mongoAddAll(client, lat, long, a):
#     db = client.parkingdb
#     collection = db.locs

#     temp = dict()
#     temp["lat"] = lat
#     temp["long"] = long
#     temp[""]
#     temp["freq"] = a
#     collection.insert_one(temp)

#     client.close()
#     return


# ca = certifi.where()
# load_dotenv()

# MONGO_URI = os.getenv("MONGODB_URI")
# client = MongoClient(MONGO_URI, tlsCAFile=ca)

# db = client.parkingdb
# collection = db.locs
docs = []

with open("../data/parking.json", "r") as f:
    temp = json.load(f)
    i = dict()
    for j, item in enumerate(temp):
        if j > 199:
            break
        i["_id"] = str(uuid.uuid4().hex)
        i["lat"] = item["Latitude"]
        i["long"] = item["Longitude"]
        i["img"] = ""
        i["free"] = str(randint(0, 5))
        i["freq"] = {
            "00": randint(0, 20),
            "01": randint(0, 20),
            "02": randint(0, 20),
            "03": randint(0, 20),
            "04": randint(0, 20),
            "05": randint(0, 20),
            "06": randint(0, 20),
            "07": randint(0, 20),
            "08": randint(0, 20),
            "09": randint(0, 20),
            "10": randint(0, 20),
            "11": randint(0, 20),
            "12": randint(0, 20),
            "13": randint(0, 20),
            "14": randint(0, 20),
            "15": randint(0, 20),
            "16": randint(0, 20),
            "17": randint(0, 20),
            "18": randint(0, 20),
            "19": randint(0, 20),
            "20": randint(0, 20),
            "21": randint(0, 20),
            "22": randint(0, 20),
            "23": randint(0, 20),
        }
        # collection.insert_one(i)
        print(i)
        docs.append(i)
with open("data.json", "w") as f:
    f.write(json.dumps(docs))

# collection.insert_many(docs)


# if __name__ == "__main__":

#     ca = certifi.where()
#     load_dotenv()

#     MONGO_URI = os.getenv("MONGODB_URI")
#     client = MongoClient(MONGO_URI, tlsCAFile=ca)
#     a = {
#         "00": randint(0, 20),
#         "01": randint(0, 20),
#         "02": randint(0, 20),
#         "03": randint(0, 20),
#         "04": randint(0, 20),
#         "05": randint(0, 20),
#         "06": randint(0, 20),
#         "07": randint(0, 20),
#         "08": randint(0, 20),
#         "09": randint(0, 20),
#         "10": randint(0, 20),
#         "11": randint(0, 20),
#         "12": randint(0, 20),
#         "13": randint(0, 20),
#         "14": randint(0, 20),
#         "15": randint(0, 20),
#         "16": randint(0, 20),
#         "17": randint(0, 20),
#         "18": randint(0, 20),
#         "19": randint(0, 20),
#         "20": randint(0, 20),
#         "21": randint(0, 20),
#         "22": randint(0, 20),
#         "23": randint(0, 20),
#     }
#     with open("../data/parking.json", "r") as f:
#         temp = json.load(f)
#         lat = 0
#         long = 0
#         for j, item in enumerate(temp):
#             if j > 200:
#                 break
#             lat = item["Latitude"]
#             long = item["Longitude"]
#             mongoAddAll(client, lat, long, a)
