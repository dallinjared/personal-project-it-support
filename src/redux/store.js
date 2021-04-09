import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';
import {createStore} from 'redux';

// function reducer(state) {
//     return state;
// };

let store = createStore(userReducer, composeWithDevTools())


export default store;