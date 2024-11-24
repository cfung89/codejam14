import { useState, useRef, useEffect } from "react";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";
import "../styles/SearchBar.css";
import searchButton from "../assets/search.svg";

const API_KEY = import.meta.env.VITE_API_KEY;

const SearchBar = () => {
  const [selectedLoc, setSelectedLoc] = useState(null);

  return (
    <div>
      <APIProvider apiKey={API_KEY}>
        <LocAutocomplete onLocSelect={setSelectedLoc} />
      </APIProvider>
    </div>
  );
};

const LocAutocomplete = ({ onLocSelect }) => {
  const [searchAutocomplete, setSearchAutocomplete] = useState(null);
  const inputRef = useRef(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    // finds autocomplete
    if (!places || !inputRef.current) {
      return;
    }

    const searchOptions = {
      fields: ["geometry", "name", "formatted_address"],
    };

    setSearchAutocomplete(
      new places.Autocomplete(inputRef.current, searchOptions),
    );
  }, [places]);

  useEffect(() => {
    if (!searchAutocomplete) {
      return;
    }

    searchAutocomplete.addListener("place_changed", () => {
      const tempPlace = searchAutocomplete.getPlace();
      onLocSelect(tempPlace);
    });
  }, [onLocSelect, searchAutocomplete]);

  return (
    <div className="search-container">
      <input type="text" className="search-bar" ref={inputRef} />
      <button className="search-button">
        <img src={searchButton} alt="Search Icon" />
      </button>
    </div>
  );
};

export default SearchBar;
