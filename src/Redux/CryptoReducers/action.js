import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType"

export const getData = ()=> (dispatch)=> {
    dispatch({type:GET_DATA_REQUEST})

    let response = fetch('https://api.coingecko.com/api/v3/coins/markets?order=market_cap_desc&vs_currency=INR')
    response.then(function(res){
        return res.json()
    })
    .then(function(data){
        dispatch({type: GET_DATA_SUCCESS, payload: data})
    })
    .catch(function(){
        dispatch({type: GET_DATA_FAILURE})
    })
}