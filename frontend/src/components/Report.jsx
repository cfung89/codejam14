import { useState } from "react";
import { postReport } from "../server";
import "../styles/Report.css";

const Report = ({
  picture,
  location,
  setUseCamera,
  reportMenu,
  setReportMenu,
}) => {
  const [freeSpots, setFreeSpots] = useState("");

  function handleReportSubmit() {
    if (location) {
      console.log(location, picture, freeSpots);
      postReport(location, picture, freeSpots);
    }
  }

  function handleOpenCam() {
    setUseCamera(true);
  }

  function handleReportMenu() {
    reportMenu ? setReportMenu(false) : setReportMenu(true);
  }

  return (
    <div className="report-container">
      {reportMenu ? (
        <div>
          <button onClick={handleReportMenu} className="trigger-button">
            -
          </button>
          <div className="drop-up-menu">
            <div>How many free parking spots are there around you?</div>
            <button onClick={() => setFreeSpots("0")} className="menu-button">
              0
            </button>
            <button onClick={() => setFreeSpots("1")} className="menu-button">
              1
            </button>
            <button onClick={() => setFreeSpots("2")} className="menu-button">
              2
            </button>
            <button onClick={() => setFreeSpots("3")} className="menu-button">
              3
            </button>
            <button onClick={() => setFreeSpots("4")} className="menu-button">
              4
            </button>
            <br />
            <button className="camera-button" onClick={handleOpenCam}>
              Take a picture of the nearest sign!
            </button>
            <br />
            <button className="submit-button" onClick={handleReportSubmit}>Submit</button>
          </div>
        </div>
      ) : (
        <button onClick={handleReportMenu} className="trigger-button">
          +
        </button>
      )}
    </div>
  );
};

export default Report;
