import React from 'react';
import TodoStore from './TodoStore';
import * as Actions from './Actions';
import Todo from './Todo';

class TodoList extends React.Component{
	constructor(){
		super();
		this.todos = TodoStore._getAll();
	}
	componentWillMount(){
		TodoStore.on("change",()=>{
			this.setState({
				todos: TodoStore._getAll()
			});
		});

	}

	_addTodo(){
		let newTask = this.todo.value;
		Actions.addTodo(newTask);
		this.todo.value="";
	}

	render(){
		const todos = this.todos.map((todo)=>{
			return <Todo text={todo.text} key={todo.id} id={todo.id}/>
		});

		return (
			<div>
			<h1>Todo List using Flux</h1><br/>
			<input type="text"  placeholder="Your Todo..." ref={ (node)=>{this.todo = node;} }/>
			<button onClick={this._addTodo.bind(this)}>Add Todo</button>
			<br/>
			<ul>
				{todos}
			</ul>
		</div>
		);
	}
}

export default TodoList;