import {EventEmitter} from 'events';
import Dispatcher from './Dispatcher';

class TodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos = [
			{
				id:2342424,
				text:"Go Shopping",
				completed: false
			},
			{
				id:93903,
				text:"Learn flux and Redux",
				completed: true
			},
			{
				id:23456789,
				text:"Prepare for the interview and rule the salary at 8.4 LPA",
				completed:true
			}
		];
	}

	_getAll(){
		return this.todos;
	}

	_emitChange(){
		this.emit("change");
	}

	_addTodo(text){
		let id = Date.now();
		this.todos.push({
			id,
			text,
			completed:false
		});
		this._emitChange();			
	}

	_deleteTodo(id){
		this.todos.map((todo,index)=>{
			if(todo.id == id){
				this.todos.splice(index,1);
			}
		});
		this._emitChange();		
	}

	_updateTodo(obj){
		this.todos.map((todo,index)=>{
			if(todo.id == obj.id){
				todo.text = obj.text;
			}
		});		
		this._emitChange();
	}

	_handleActions(action){
		switch(action.type){
			case "ADD_TODO":
				this._addTodo(action.text);
				break;
			case "DELETE_TODO":
				this._deleteTodo(action.id);
				break;
			case "UPDATE_TODO":
				this._updateTodo(action.data);
				break;
			default:
				return;			
		}
	}

}

const todoStore = new TodoStore();

Dispatcher.register(todoStore._handleActions.bind(todoStore));

export default todoStore;

