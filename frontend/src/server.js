const BASE = "http://127.0.0.1:5000";

async function postLocation(lat, long) {
  const request = {
    latitude: lat,
    longitude: long,
  };

  await fetch(`${BASE}/location`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

async function postFreeSpots(num) {
  await fetch(`${BASE}/free`, {
    method: "POST",
    body: JSON.stringify({ freeSpots: num }),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

async function postReport(image) {
  await fetch(`${BASE}/report`, {
    method: "POST",
    body: JSON.stringify({ img: image }),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export { postLocation, postReport, postFreeSpots };
