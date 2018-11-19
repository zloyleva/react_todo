import React from "react";

export class Button extends React.Component{
	render = () => {
		return this.props.isShow?<button className="btn" onClick={this.props.finishTask}>Finish</button>:"";
	}
}