import axios from 'axios';


export const FETCH_START = "FETCH_START"; 
export const FETCH_SUCCESS = "FETCH_SUCCESS"; 
export const getCharacter = () => {
    return ( 
        dispatch => {
        dispatch({type: FETCH_START})
            axios.get(`https://api.guildwars2.com/v2/specializations/1`)
                .then(resp => {
                console.log(resp.data); 
                dispatch({type: FETCH_SUCCESS, payload: resp.data})
            })
                .catch(err => {
                console.log(err)
            })
        }
    )
}



export const fetchStart = () => {
    return({ type: FETCH_START});
}

export const fetchSuccess = (specialization) => {
    return ({ type: FETCH_SUCCESS, payload: specialization })
}