// import {createStore} from 'redux';
// const initState = {
// 	todos: []
// }
// function myReducer(state = initState, action) {
// 	if(action.type == 'ADD_TODO') {
// 		return {
// 		...state,
// 			todos: [...state.todos, action.todo]
// 		}
// 	}
// }
// const store = createStore(myReducer)
// store.subscribe(()=> {
// 	console.log('state updated');
// 	console.log(store.getState());
// })
// const todoAction = {type: 'ADD_TODO', todo: 'shopping'};
// store.dispatch(todoAction)
