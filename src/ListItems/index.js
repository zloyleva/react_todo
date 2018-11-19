import React from "react";
import "./style.css"

import {Button} from "../Button"

export class ListItems extends React.Component{
	finishTask = (key) => {
		this.props.finishTaskById(key);
	}

	createTaskHtml = (task,key) => {
		return (
			<li className={`list-group-item d-flex ${task.status?"line-through":""}`} key={key}>
				<div className="mr-auto">{task.title}</div>
				<Button isShow={!task.status} finishTask={()=>this.finishTask(key)} />
			</li>
		);
	}
	
	render = () => {
		return this.props.items.map((el,i)=>this.createTaskHtml(el,i));
	}
}