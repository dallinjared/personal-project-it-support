const initialState = {
    ticket: {}
}

const CREATE_TICKET = 'CREATE_TICKET';
const GET_USER_TICKETS = 'GET_USER_TICKETS';

export function createTicket(ticket){
    return {
        type: CREATE_TICKET,
        payload: ticket
    }
}

export function getUserTickets(ticket){
    return {
        type: GET_USER_TICKETS,
        payload: ticket
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case CREATE_TICKET:
            return {
                ...state,
                ...action.payload
            }
        case GET_USER_TICKETS:
            return {
                ...state,
                ...action.payload
            }
        default: return state
    }
}