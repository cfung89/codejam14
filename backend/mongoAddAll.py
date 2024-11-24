import json

import os
import certifi
from dotenv import load_dotenv

from pymongo import MongoClient

ca = certifi.where()
load_dotenv()

MONGO_URI = os.getenv("MONGODB_URI")
client = MongoClient(MONGO_URI, tlsCAFile=ca)

# Testing MongoDB connection
# for db in client.list_database_names():
#     print(db)


db = client.parkingdb
collection = db.locs

docs = []

with open("../data/parking.json", "r") as f:
    docs = json.load(f)
    # for item in f:
    #     docs.append(temp)

result = collection.insert_many(docs)
print(len(result.inserted_ids))

client.close()
