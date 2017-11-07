import Dispatcher from './Dispatcher';

export function addTodo(text){
	Dispatcher.dispatch({
		type:"ADD_TODO",
		text
	});
}

export function deleteTodo(id){
	Dispatcher.dispatch({
		type:"DELETE_TODO",
		id
	});
}

export function updateTodo(obj){
	Dispatcher.dispatch({
		type:"UPDATE_TODO",
		data:obj
	})
}