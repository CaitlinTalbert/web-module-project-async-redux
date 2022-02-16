import data from '../data/guildwars';
import { FETCH_START } from '../actions/index'; 

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
        default: 
            return (state);
    }
}

export default reducer; 