import React from 'react';
import "./style.css"

class Button extends React.Component{
	render(){
		return this.props.isShow?<button className="btn" onClick={this.props.finishTask}>Finish</button>:"";
	}
}

export default class ListItems extends React.Component{
	finishTask(key){
		this.props.finishTaskById(key);
	}

	createTaskHtml(task,key){
		return (
			<li className={`list-group-item d-flex ${task.status?"line-through":""}`} key={key}>
				<div className="mr-auto">{task.title}</div>
				<Button isShow={!task.status} finishTask={()=>this.finishTask(key)} />
			</li>
		);
	}
	
	render(){
		return this.props.items.map((el,i)=>this.createTaskHtml(el,i));
	}
}