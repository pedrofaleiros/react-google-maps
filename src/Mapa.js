import "./App.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Component } from "react";
import { Markers } from "./Markers";

function Mapa() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  const center = { lat: -15.79, lng: -47.91 };

  if (!isLoaded) {
    return <div>Erro</div>;
  }

  const markers = new Markers();

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName="map-container"
      onClick={(click)=>{
		markers.addMarker(click)
	  }}
    >
      {markers.render()}
    </GoogleMap>
  );
}

export default Mapa;
