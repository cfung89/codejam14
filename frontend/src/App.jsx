import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import Report from "./components/Report";
import SearchBar from "./components/SearchBar";
import Camera from "./components/Camera";

import "./styles/App.css";

const App = () => {
  const [reportMenu, setReportMenu] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  const [picture, setPicture] = useState("");
  const [location, setLocation] = useState("");

  if (!location) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ Latitude: latitude, Longitude: longitude });
  }

  function error() {
    console.log("Unable to retrieve your location");
    setReportMenu(false);
  }

  return (
    <div>
      <h1 className="title">Park n' Chill</h1>
      <HashLink smooth to="home#maps">
        <SearchBar />
      </HashLink>
      <div id="maps">
        {useCamera ? (
          <Camera setUseCamera={setUseCamera} setPicture={setPicture} />
        ) : (
          <Report
            picture={picture}
            location={location}
            setUseCamera={setUseCamera}
            reportMenu={reportMenu}
            setReportMenu={setReportMenu}
          />
        )}
      </div>
    </div>
  );
};

export default App;
