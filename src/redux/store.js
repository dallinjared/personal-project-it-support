import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';
import ticketReducer from './reducers/ticketReducer';
import {combineReducers, createStore} from 'redux';

// function reducer(state) {
//     return state;
// };
const rootReducer = combineReducers({user: userReducer, ticket: ticketReducer})

let store = createStore(rootReducer, composeWithDevTools())


export default store;