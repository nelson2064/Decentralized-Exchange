import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()
const middleware = []

// For Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware, loggerMiddleware))
  )
}










//reducer store action dispatch 
// Define a reducer function to handle actions          sortReducer
// Create the store         createStore(sortReducer)
//defina action creators to dispatch actions
// Dispatch actions to modify the state of the store


// Define the initial state of the store
// const initialState = {
//   numbers: [5, 3, 7, 1, 8]
// };

// // Define a reducer function to handle actions
// function sortReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'SORT_ASCENDING':
//       return {
//         ...state,
//         numbers: state.numbers.slice().sort((a, b) => a - b)
//       };
//     case 'SORT_DESCENDING':
//       return {
//         ...state,
//         numbers: state.numbers.slice().sort((a, b) => b - a)
//       };
//     default:
//       return state;
//   }
// }

// // Create the store
// const store = Redux.createStore(sortReducer);

// // Define action creators to dispatch actions
// function sortAscending() {
//   return {
//     type: 'SORT_ASCENDING'
//   };
// }

// function sortDescending() {
//   return {
//     type: 'SORT_DESCENDING'
//   };
// }

// // Dispatch actions to modify the state of the store
// console.log(store.getState()); // { numbers: [5, 3, 7, 1, 8] }

// store.dispatch(sortAscending());
// console.log(store.getState()); // { numbers: [1, 3, 5, 7, 8] }

// store.dispatch(sortDescending());
// console.log(store.getState()); // { numbers: [8, 7, 5, 3, 1] }
