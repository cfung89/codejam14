const BASE = "http://127.0.0.1:5000/";

async function postLocation(lat, long) {
  const request = {
    latitude: lat,
    longitude: long,
  };

  fetch(`${BASE}/location`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

async function postReport(image) {
  fetch(`${BASE}/report`, {
    method: "POST",
    body: JSON.stringify({ img: image }),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

export { postLocation, postReport };
