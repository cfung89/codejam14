import { useState, useRef, useEffect } from "react";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";
import "../styles/Searchbar.css";

// const API_KEY = import.meta.env.VITE_API_KEY;
const API_KEY = "temp";

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
    <div>
      <input className="search-bar" ref={inputRef} />
    </div>
  );
};

export default SearchBar;
