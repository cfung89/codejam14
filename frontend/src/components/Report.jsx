import { useState } from "react";
import { postLocation, postFreeSpots, postReport } from "../server";

const Report = ({ picture, setUseCamera }) => {
  const [reportMenu, setReportMenu] = useState(false);
  const [freeSpots, setFreeSpots] = useState(-1);
  const [location, setLocation] = useState(null);

  function handleReportSubmit() {
    if (location) {
      postLocation(location.lat, location.long);
    }
    if (freeSpots != -1) {
      postFreeSpots(freeSpots);
    }
    if (picture) {
      postReport(picture);
    }
  }

  function handleOpenCam() {
    setUseCamera(true);
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ lat: latitude, long: longitude });
  }

  function error() {
    console.log("Unable to retrieve your location");
    setReportMenu(false);
  }
  function handleReportMenu() {
    reportMenu ? setReportMenu(false) : setReportMenu(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  return (
    <div>
      {reportMenu ? (
        <div>
          <button onClick={handleReportMenu}>-</button>
          <div>How many free parking spots are there around you?</div>
          <button onClick={() => setFreeSpots(0)}>0</button>
          <button onClick={() => setFreeSpots(1)}>1</button>
          <button onClick={() => setFreeSpots(2)}>2</button>
          <button onClick={() => setFreeSpots(3)}>3</button>
          <button onClick={() => setFreeSpots(4)}>4</button>
          <button onClick={handleOpenCam}>
            Take a picture of the nearest sign!
          </button>
          <button onClick={handleReportSubmit}>Submit</button>
        </div>
      ) : (
        <button onClick={handleReportMenu}>+</button>
      )}
    </div>
  );
};

export default Report;
