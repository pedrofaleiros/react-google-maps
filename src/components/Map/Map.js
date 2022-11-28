import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { novoMarker, changeMarker } from "../Utils";

export function Map() {
    const [center, setCenter] = useState({ lat: -15.79, lng: -47.91 });
    const [markers, setMarkers] = useState([]);
    const [id, setId] = useState(1001);
    const [hasOrigin, setHasOrigin] = useState(false);

    function handleClickMap(click) {
        if (!click.placeId) {
          return;
        }
        const novo = novoMarker(click.latLng, id);

        setId(id + 1);
        setMarkers([...markers, novo]);
    }

    function handleChangeMarker(id) {
        const data = changeMarker(markers, id, hasOrigin);
        const novo_markers = data.markers;

        setHasOrigin(data.hasOrigin);
        setMarkers([...novo_markers]);
    }

    function removeAllMarkers() {
        setHasOrigin(false);
        setMarkers([]);
    }

    return (
        <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName="map-container"
            onClick={handleClickMap}
            onRightClick={removeAllMarkers}
            options={{
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
            }}
        >
            {markers.map((mk) => {
                return (
                    <Marker
                        position={{ lat: mk.lat, lng: mk.lng }}
                        key={mk.id}
                        onClick={() => {
                            handleChangeMarker(mk.id);
                        }}
                        icon={mk.icon}
                    ></Marker>
                );
            })}
        </GoogleMap>
    );
}