import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

import { INCREMENT, DECREMENT, INCREMENT_FIVE, TOGGLE_COUNTER } from "../store/index.js";


const Counter = () => {
	const dispatch = useDispatch();
	const counterSelector = useSelector((state) => state.counter);
  const show = useSelector(state => state.showCounter)

	const incrementHandler = () => {
		dispatch({
			type: INCREMENT,
		});
	};

	const decrementHandler = () => {
		dispatch({
			type: DECREMENT,
		});
	};

	const incrementFive = () => {
		dispatch({
			type: INCREMENT_FIVE,
			amount: 5,
		});
	};
	const toggleCounterHandler = () => {
		dispatch({
			type: TOGGLE_COUNTER,
		})
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counterSelector}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={incrementFive}>Increment by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

// class Counter extends Component {
// 	incrementHandler = () => {
// 		this.props.increment()
// 	}
// 	decrementHandler = () => {
// 		this.props.decrement()
// 	}
// 	toggleCounterHandler = () => {}

// 	render() {
// 		return (
// 			<main className={classes.counter}>
// 				<h1>Redux Counter</h1>
// 				<div className={classes.value}>{this.props.counter}</div>
// 				<div>
// 					<button onClick={this.incrementHandler}>Increment</button>
// 					<button onClick={this.decrementHandler}>Decrement</button>
// 				</div>
// 				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
// 			</main>
// 		);
// 	}
// }

// const mapStateToProps = state => {
// 	return {
// 		counter: state.counter
// 	}
// }

// const mapDispatchToProps = dispatch => {
// 	return {
// 		increment: () => dispatch({
// 			type: 'increment'
// 		}),
// 		decrement: () => dispatch({
// 			type: 'decrement'
// 		})
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
