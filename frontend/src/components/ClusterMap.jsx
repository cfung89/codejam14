import { useState, useEffect, useRef } from "react";
import {APIProvider, Map, useMap, AdvancedMarker, InfoWindow} from '@vis.gl/react-google-maps';
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import parkingsigns from "../parking.json";
import "../styles/ClusterMap.css";

function ClusterMap() {
  let points = [];
  for (let i = 0; i < 300; i++) {
	  points.push({ lat: Number(parkingsigns[i]["Latitude"]), lng: Number(parkingsigns[i]["Longitude"])});
  };

  let center = {lat: 45.50604773718506, lng: -73.57832268309552};
  const API_KEY = import.meta.env.VITE_API_KEY;
  return (
    <>
  <APIProvider apiKey={API_KEY}>
    <div className="map">
    <Map
      style={{width: '55vw', height: '65vh'}}

      defaultCenter={center}
      defaultZoom={10}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
      mapId="d099627e4ebae63d"
    />
    </div>
    <Markers points={points}/>
  </APIProvider>
    </>
  );

}


const Markers = (props) => {
	const map = useMap();
	const [markers, setMarkers] = useState({});
	const clusterer = useRef(null);
	const [infowindowOpen, setInfowindowOpen] = useState(null);
	useEffect(() => {
		if (!map) return;
		if (!clusterer.current) {
			clusterer.current = new MarkerClusterer({ map });
		};
	}, [map]);

	useEffect(() => {
		clusterer.current?.clearMarkers();
		clusterer.current?.addMarkers(Object.values(markers));
	}, [markers]);


	const setMarkerRef = (marker, key) => {
		// if (marker == null) return;
		if (marker && markers[key]) return;
		if (!marker && !markers[key]) return;
		console.log(marker);

		setMarkers((prev) => {
			if (marker) {
				return {...prev, [key]: marker};
			} else {
				const newMarkers = {...prev};
				delete newMarkers[key];
				return newMarkers;
			}
		});
	};

	return (
		<>
		{ 
			props.points.map( (point, index) =>  <AdvancedMarker key={index} position={point} onClick={() => setInfowindowOpen(index)} ref={(marker) => setMarkerRef(marker, index)}/> )

		}
			{ infowindowOpen && (
					<InfoWindow
					  anchor={markers[infowindowOpen]}
					  maxWidth={200}
					  onCloseClick={() => setInfowindowOpen(null)}>
				 	  <div>
					  Road: Rue Commune, Montreal
				 	  </div>

					  <b>
					  Votes: 10 |  
					  Pricing: 0$ | 
				          Time: 24h  
				          </b>
					  </InfoWindow>
				      ) 
			}
 
		</>
	);

};

export default ClusterMap;
