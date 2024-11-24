import os
import certifi
from dotenv import load_dotenv

from pymongo import MongoClient
from mongoGet import mongoGet


ca = certifi.where()
load_dotenv()

MONGO_URI = os.getenv("MONGODB_URI")
client = MongoClient(MONGO_URI, tlsCAFile=ca)

db = client.parkingdb
collection = db.locs

# Testing MongoDB connection
# for db in client.list_database_names():
#     print(db)

# for i, n in enumerate(collection.find({})):
#     print(i, n)
print(mongoGet())

client.close()
