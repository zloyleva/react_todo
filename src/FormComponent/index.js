import React from "react";
import "./style.css";

export class FormComponent extends React.Component{
	submitForm = (e) => {
		if(e.target[0].value)this.props.addItem(e);
		return;
	}

	render = () => {
		return (
			<form className="form-inline" onSubmit={this.submitForm}>
				<div className="form-group w-100">
					<input className="form-control task_input" type="text" placeholder="Enter next task" />
					<button className="btn btn-primary ml-1" type="submit">Add task</button>
				</div>
			</form>
		);
	}
}