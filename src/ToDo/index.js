import React from "react";

import {FormComponent} from "../FormComponent"
import {Dasboard} from "../Dasboard"

export class ToDo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: [
				{title:"Waike up...", status: false},
				{title:"Clean teeth", status: false},
			]
		}
	}

	handlerAddItem = (e) => {
		e.preventDefault();

		this.setState({items: [...this.state.items, {title:e.target[0].value, status: false}]});
		e.target[0].value = "";
	}

	finishTaskById = (i) => {
		const items = this.state.items.slice();
		items[i].status = true;
		this.setState({items:items});
	}

	render = () => {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="my-2">ToDo List:</h1>
						<FormComponent addItem={this.handlerAddItem}/>
						<Dasboard items={this.state.items} finishTaskById={this.finishTaskById} />
					</div>
				</div>
			</div>
		);
	}
}