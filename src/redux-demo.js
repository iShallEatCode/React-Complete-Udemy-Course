// import pkg from '@reduxjs/toolkit'
// const { configureStore } = pkg



// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1
//     }
//   } 

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1
//     }
//   } 

//   return state;
// };

// const store = configureStore({
//   reducer: {
//     counterReducer
//   }
// });

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState)
// }

// store.subscribe(counterSubscriber);

// store.dispatch({
//   type: 'increment'
// })
// store.dispatch({
//   type: 'decrement'
// })