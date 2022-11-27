import "./App.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Component } from "react";

export class Markers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1001,
      markers: [],
    };
  }

  addMarker(click) {
    if (!click.placeId) {
      return;
    }

    const position = click.latLng;
    const novo = {
      lat: position.lat(),
      lng: position.lng(),
      id: this.state.id,
      isOrigin: false,
    };

    this.setState({
      markers: [...this.state.markers, novo],
      id: this.state.id + 1,
    });
  }

  getMarker = () => {
    return this.state.markers.map((mk, i) => {
      return (
        <Marker
          position={{ lat: mk.lat, lng: mk.lng }}
          key={mk.id}
          onClick={() => {
            console.log(mk.id);
          }}
        ></Marker>
      );
    });
  }

  render() {
    return (
      <div>
        {this.getMarker()}
      </div>
    );
  }
}
