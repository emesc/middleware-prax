import { FETCH_WEATHER } from '../actions/index'

// reducers are just functions
// first argument is always state - the state that this reducer is responsible for; 2nd is action
export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// use push instead of concat doesnt mutate the old array; it returns a new array
			// ALWAYS RETURN A NEW INSTANCE OF STATE!!!
			// return state.concat([action.payload.data])
			// or use destructor
			// take a new array and put action.payload.data in it and add the current state (which could be an array)
			return [action.payload.data, ...state]
	}
	return state
}
