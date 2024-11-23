#! /bin/python3

import csv
import json

def csvToJson(csv_path: str, json_path: str):
    data = list()
    with open(csv_path, encoding="utf-8") as f:
        csvReader = csv.DictReader(f)
        for i in csvReader:
            data.append(i)

    with open(json_path, "w") as f:
        f.write(json.dumps(data, indent=4))

if __name__ == "__main__":
    csvToJson("./signalisation_stationnement.csv", "./parking.json")
