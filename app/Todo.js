import React from 'react';
import * as Actions from './Actions';

class Todo extends React.Component{
	constructor(){
		super();
		this.state = {
			editing:false
		};
	}

	_deleteTodo(id){
		Actions.deleteTodo(id);
	}
	_editTodo(){
		this.setState({
			editing: true
		});
	}
	_updateTodo(id){
		let text = this.newVal.value;
		let data = {
			id,
			text
		};
		Actions.updateTodo(data);

		this.setState({
			editing: false
		});
	}

	render(){
		const todo = !this.state.editing ? (
			<li>
				{this.props.text}
				<button onClick={this._deleteTodo.bind(this,this.props.id)}>Delete</button>
				<button onClick={this._editTodo.bind(this)}>Edit</button>
			</li>
		) : (
			<li>
				<input defaultValue={this.props.text} ref={(node)=>{this.newVal = node;}} />
				<button onClick={this._updateTodo.bind(this,this.props.id)}>Save</button>
			</li>
		);

		return todo;
	}
}

export default Todo;