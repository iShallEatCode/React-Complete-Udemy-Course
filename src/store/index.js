import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'

export const INCREMENT = "increment"
export const DECREMENT = "decrement"
export const INCREMENT_FIVE = "incrementFive"
export const TOGGLE_COUNTER = "toggleCounter"


const initialState = { counter: 0, showCounter: true };

createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement() {},
		incrementFive() {},
		toggleCounter() {},
	}
})

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				counter: state.counter + 1,
				showCounter: state.showCounter,
			};
		case DECREMENT:
			return {
				counter: state.counter - 1,
				showCounter: state.showCounter,
			};
		case INCREMENT_FIVE:
			return {
				counter: state.counter + action.amount,
				showCounter: state.showCounter,
			};
		case TOGGLE_COUNTER:
			return {
				counter: state.counter,
				showCounter: !state.showCounter,
			};
		default:
			return state;
	}
};

const store = configureStore({
	reducer: counterReducer,
});

// store.dispatch ({
//   type: 'increment'
// })

export default store;
