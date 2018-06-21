let initialState = {
	todos: [
		{
			text: "Take out the trash", // 3 layers deep, use .map() in this case
			isComplete: false
		}
	]
};


// This reducer isn't pure! Fix it plz
const reducer = (state = initialState, action) => {
	
	let stateCopy = {
		...state, 
		todos: state.todos.map((todo)=>{  // .map provides a brand new array with the same number of elements, in this case todo
			return {...todo}  // this copies the object inside todos
		}) 
	};
	
	if (action.type == "ADD_TODO") {
		
		return stateCopy;
	} else if (action.type == "TOGGLE_TODO") {
		let todoToToggle = state.todos[action.todoIndex];
		todoToToggle.isComplete = !todoToToggle.isComplete;
		return state;
	} else {
		return state;
	}
}


// const reducer = (state = initialState, action) => {
// 	if (action.type == "ADD_TODO") {
// 		state.todos.push({
// 			text: action.todoText,
// 			isComplete: false
// 		});
// 		return state;
// 	} else if (action.type == "TOGGLE_TODO") {
// 		let todoToToggle = state.todos[action.todoIndex];
// 		todoToToggle.isComplete = !todoToToggle.isComplete;
// 		return state;
// 	} else {
// 		return state;
// 	}
// }
