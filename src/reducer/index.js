import { FETCH_START, FETCH_SUCCESS } from '../actions/index'; 

const initialState = {
    specialization: [], 
    loading: false, 
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START: 
            return {
                ...state, 
                loading: true, 
                error: ""
            }
        case FETCH_SUCCESS: 
            return { 
                ...state, 
                loading: false, 
                specialization: action.payload, 
                error: ""
            }
        default: 
            return (state);
    }
}

export default reducer; 