let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original 
//     state object
const reducer = (state = initialState, action) => {
	let { type, counterIndex } = action;

	let stateCopy = {
		...state,
		counters: [...state.counters]  // state is referring to the object, counters is referring to the key
	};

	if (type == "INCREMENT") {
		stateCopy.counters[countersIndex]++;
		return stateCopy;
	} else if (type == "ADD_COUNTER") {
		stateCopy.counters.push(0);
 		return stateCopy;
	} else {
		return state;
	}
}


const reducer = (state = initialState, action) => {
	let { type, counterIndex } = action;
	if (type == "INCREMENT") {
		return {
			counters: [
				...state.counters.slice(0, counterIndex), // return a new array
				state.counters[counterIndex] + 1,
				...state.counters.slice(counterIndex + 1)
			]
		}
	} else if (type == "ADD_COUNTER") {
		// state.counters.push(0);
		return {
			counters: state.counters.concat(0)
		}
	} else {
		return state;
	}
}
