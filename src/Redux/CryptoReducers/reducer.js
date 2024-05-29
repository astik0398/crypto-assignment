import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType"

const initialData = {
    data: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialData, action)=> {
    switch(action.type){
        case GET_DATA_REQUEST:
            return {...state, isLoading: true}

        case GET_DATA_SUCCESS:
            return {...state, isLoading: false, data: action.payload}    

        case GET_DATA_FAILURE:
            return {...state, isError: true}    

        default:
            return state
    }
}