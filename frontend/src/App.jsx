import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import Report from "./components/Report";
import SearchBar from "./components/SearchBar";
import Camera from "./components/Camera";

import background from "./assets/background.svg";
import "./App.css";

const App = () => {
  const [useCamera, setUseCamera] = useState(false);
  const [picture, setPicture] = useState("");
  console.log(picture);
  // <img src={background} alt="background" className="background" />
  return (
    <div>
      <SearchBar />
      <HashLink smooth to="home#maps">
        <button>test</button>
      </HashLink>
      <div id="maps">
        {useCamera ? (
          <Camera setUseCamera={setUseCamera} setPicture={setPicture} />
        ) : (
          <Report picture={picture} setUseCamera={setUseCamera} />
        )}
      </div>
    </div>
  );
};

export default App;
