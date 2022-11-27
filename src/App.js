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
  const button = document.getElementById('calculate-button');

  button.addEventListener('click', ()=>{
    removeAllMarkers();
  })

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
      icon: undefined,
    };

    setId(id + 1);

    setMarkers([...markers, novo]);
  }

  function changeMarker(id) {
    const novo_markers = [];

    markers.forEach((mk, i) => {
      if (mk.id != id) {
        novo_markers.push(mk);
      } else {
        
        var novo = {
          lat: mk.lat,
          lng: mk.lng,
          id: mk.id,
          isOrigin: false,
        };
        if(mk.icon == undefined){
          novo.icon= "https://cdn-icons-png.flaticon.com/32/727/727590.png";
        }else{
          novo.icon = undefined;
        }

        novo_markers.push(novo);
      }
    });

    setMarkers([...novo_markers]);
  }

  function removeAllMarkers() {
    setMarkers([]);
  }

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName="map-container"
      onClick={handleClickMap}
    >
      {markers.map((mk, i) => {
        return (
          <Marker
            position={{ lat: mk.lat, lng: mk.lng }}
            key={mk.id}
            onRightClick={() => {
              changeMarker(mk.id);
            }}
            icon={mk.icon}
          ></Marker>
        );
      })}
    </GoogleMap>
  );
}

export default App;
