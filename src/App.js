import "./App.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Component, useState } from "react";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) {
    return <div>Erro</div>;
  }

  return <Map />;
}

function Map() {
  const center = { lat: -15.79, lng: -47.91 };
  const [markers, setMarkers] = useState([]);
  const [id, setId] = useState(1001);

  function handleClickMap(click) {
    /* if (!click.placeId) {
      return;
    } */

    const position = click.latLng;
    const novo = {
      lat: position.lat(),
      lng: position.lng(),
      id: id,
      isOrigin: false,
    };

    setId(id + 1);

    setMarkers([...markers, novo]);
  }

  function removeMarker(id) {
    const novo_markers = [];

    markers.forEach((mk, i)=>{
      if(mk.id != id){
        novo_markers.push(mk);
      }
    })

    setMarkers([...novo_markers]);
  }

  function removeAllMarkers(){
    setMarkers([]);
  }

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName="map-container"
      onClick={handleClickMap}
      onRightClick={removeAllMarkers}
    >
      {(
        markers.map((mk, i) => {
          return (
            <Marker
              position={{ lat: mk.lat, lng: mk.lng }}
              key={mk.id}
              onRightClick={() => {
                removeMarker(mk.id);
              }}
            ></Marker>
          );
        })
      )}
    </GoogleMap>
  );
}

export default App;
