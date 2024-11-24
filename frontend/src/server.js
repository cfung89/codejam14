const BASE = "http://127.0.0.1:5000";

async function postReport(location, image, num) {
  console.log("SENDING DATA");
  const request = {
    Location: location,
    Image: image,
    NumFreeSpots: num,
    Time: new Date().toLocaleString(),
  };

  await fetch(`${BASE}/report`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

async function getData(setData) {
  await fetch(`${BASE}/api`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
}

export { postReport, getData };
