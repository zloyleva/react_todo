import React from "react";
import "./style.css";

export default class FormComponent extends React.Component{
	render(){
		return (
			<form className="form-inline" onSubmit={this.props.addItem}>
				<div className="form-group w-100">
					<input className="form-control task_input" type="text" placeholder="Enter next task" />
					<button className="btn btn-primary ml-1" type="submit">Add task</button>
				</div>
			</form>
		);
	}
}