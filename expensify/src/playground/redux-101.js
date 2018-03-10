
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Action generators - functions that return action objects
// Describe the fact that something happened
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

// Reducer - Specifies how the application state changes
// in response to Actions.
// 1. Reducers are pure functions.
// The output is only determined by the input. It doesn't use anything
// else from outside of the function scope, and does not
// change anything outside of the function scope
// (based on old state and the action).   
// 2. Never change state or action.
// Don't mutate state directly. 
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
}

const store = createStore(countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Run whatever is in there whenever anything happens in the store.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// I'd like to increment the count
// I'd like to reset the count to zero :) 
// Done with Actions!
// Action - an object that get sent to the store - state changes
// increment, decrement, reset
// Increment the count: 

store.dispatch(incrementCount({
  incrementBy: 5
}))

store.dispatch(incrementCount());

store.dispatch(decrementCount({
  decrementBy: 10
}))

store.dispatch(resetCount());

store.dispatch(setCount({
  count: 10
}))