import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore} from 'redux';

function reducer(state) {
    return state;
};


export default createStore(reducer, composeWithDevTools());