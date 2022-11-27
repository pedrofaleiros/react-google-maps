import { Marker } from "@react-google-maps/api";
import { Component } from "react";

class Markers extends Component {
	constructor(props){
		super(props);

		if(!Marker.instance){
			Marker.instance = this;
		}

		this.state = {
			markers: [],
			id: 1001
		}

		return Markers.instance;
	}

	addMarker(click){

		const position = click.latLng;

		const novo = {
			position: {lat: position.lat(), lng: position.lng()},
			id: this.state.id
		}

		this.setState({
			markers: [...this.state.markers, novo],
			id: this.state.id + 1
		})

	}

	render() {
		return this.state.markers.length == 0 ? null 
		: (
			<div>

			{this.state.markers.map((mk)=>{
				return <Marker 
				position={mk.position}
				id={mk.id}
				/>
			})}
			</div>
		)
	}
}

export default Markers;