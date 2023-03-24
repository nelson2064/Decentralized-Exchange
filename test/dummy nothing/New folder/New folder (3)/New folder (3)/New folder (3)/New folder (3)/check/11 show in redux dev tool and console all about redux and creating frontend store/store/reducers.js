import { combineReducers } from 'redux';

function web3(state = {}, action) {
  switch (action.type) {             //handling action so whernver data get trigger whenever web3loaded get trigger we want to handle this here
    case 'WEB3_LOADED':
      return { ...state,  connection: action.connection } //update the state in es6 we do like this ...   //so basically when an action comes it will handle web3 loaded and its gona update the state  and gives us a connection key with the actual web3 connection         //now you can see in state of redux dev tool for confirmation  
      return { ...state, account: action.account }
    default:
      return state
  }
}

function token(state = {}, action) {
  switch (action.type) {
    case 'TOKEN_LOADED':
      return { ...state, contract: action.contract }
    default:
      return state
  }
}

function exchange(state = {}, action) {
  switch (action.type) {
    case 'EXCHANGE_LOADED':
      return { ...state, contract: action.contract }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  web3,
  token,
  exchange
})

export default rootReducer
