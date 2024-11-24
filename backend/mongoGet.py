import json
import os
import certifi
from dotenv import load_dotenv

from pymongo import MongoClient


# def mongoGet():
#     ca = certifi.where()
#     load_dotenv()

#     MONGO_URI = os.getenv("MONGODB_URI")
#     client = MongoClient(MONGO_URI, tlsCAFile=ca)

#     db = client.parkingdb
#     collection = db.locs
#     a = list()
#     for n in collection.find({}):
#         a.append(n)

#     client.close()
#     return a


def mongoGet():
    with open("data.json", "r") as f:
        temp = json.load(f)
    return temp
