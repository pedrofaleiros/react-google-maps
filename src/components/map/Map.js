import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Markers from "../marker/Markers";

export function Map() {
  const center = { lat: -15.79, lng: -47.91 };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const markers = new Markers();

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName="map-container"
      onClick={markers.addMarker}
    >
      {markers.render}
    </GoogleMap>
  );
}
