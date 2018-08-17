import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { combineReducers } from 'redux'
import { user } from './user.redux'
import { global } from './global.redux'
// import { chartuser } from './redux/chatuser.redux'
// import { chat } from './redux/chat.redux'
  export function initializeStore () {
    return createStore(combineReducers({user, global}), composeWithDevTools(applyMiddleware(thunkMiddleware)))
  }