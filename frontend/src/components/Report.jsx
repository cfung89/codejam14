import { useState } from "react";
import { postReport } from "../server";

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
    <div>
      {reportMenu ? (
        <div>
          <button onClick={handleReportMenu}>-</button>
          <div>How many free parking spots are there around you?</div>
          <button onClick={() => setFreeSpots("0")}>0</button>
          <button onClick={() => setFreeSpots("1")}>1</button>
          <button onClick={() => setFreeSpots("2")}>2</button>
          <button onClick={() => setFreeSpots("3")}>3</button>
          <button onClick={() => setFreeSpots("4")}>4</button>
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
