from pymongo import MongoClient
import json

client = MongoClient('CONNECTION_STR')
db = client['DB_NAME']
collection = db['COLLECTION_NAME']

docs = []

with open(r'JSON_FILENAME', 'r') as file:
        for json_item in file:
                data = json.load(json_item)
                docs.append(data)

if docs:
        collection.insert_many(docs)

client.close()