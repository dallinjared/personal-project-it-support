const initialState = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: null,
    email: '',
    phone_number: '',
    is_admin: false
};

const REGISTER_USER = 'REGISTER_USER';
const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
};

export function registerUser(user){
    return {
        type: REGISTER_USER,
        payload: user
    }
};





export default function reducer(state = initialState, action) {
    switch(action.type){
        case REGISTER_USER:
            return {
                ...state,
                ...action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
};