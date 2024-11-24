import os
import certifi
from dotenv import load_dotenv

from pymongo import MongoClient


ca = certifi.where()
load_dotenv()

MONGO_URI = os.getenv("MONGODB_URI")
client = MongoClient(MONGO_URI, tlsCAFile=ca)

db = client.parkingdb
collection = db.locs
db.drop_collection("locs")

client.close()
