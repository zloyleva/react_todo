import React from "react";
import ListItems from "../ListItems/ListItems"

export default class Dasboard extends React.Component{
	finishTaskById(key){
		this.props.finishTaskById(key);
	}

	render(){
		return (
			<div className="my-4">
				<h4>Total tasks: {this.props.items.length}</h4>
				<ul className="list-group my-2">
					<ListItems items={this.props.items} finishTaskById={this.finishTaskById.bind(this)}/>
				</ul>
			</div>
		);
	}
}