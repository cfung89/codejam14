import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { getData } from "./server.js";

import Report from "./components/Report";
import SearchBar from "./components/SearchBar";
import Camera from "./components/Camera";
import ClusterMap from "./components/ClusterMap.jsx";

import "./styles/App.css";

const App = () => {
  const [reportMenu, setReportMenu] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  const [picture, setPicture] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);
  if (!data) {
    getData(setData);
  }
  console.log(data);

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
          <div>
            <ClusterMap />
            <Report
              picture={picture}
              location={location}
              setUseCamera={setUseCamera}
              reportMenu={reportMenu}
              setReportMenu={setReportMenu}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
