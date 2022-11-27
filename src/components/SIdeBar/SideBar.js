import { Component } from "react";

export class SideBar extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return <div className="side-bar">
			<button id="calculate-button">Calcular</button>
		</div>
	}
}