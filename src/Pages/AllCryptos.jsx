import React, { useEffect, useState } from 'react'
import '../Pages/AllCrypto.css'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../Redux/store'
import { getData } from '../Redux/CryptoReducers/action'
import { useNavigate } from 'react-router-dom'

const AllCryptos = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector(store=> store.coinReducer.data)
    const loading = useSelector(store=> store.coinReducer.isLoading)

    useEffect(()=> {
        dispatch(getData())
    }, [])

    function handleClick(id){
        navigate(`/coin/${id}`)
    }

  return (
    <div>
        {loading ? <span class="loader"></span> : <table style={{width:'90%', margin:'auto'}}>
            <tr>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>SYMBOL</th>
                <th>PRICE</th>
                <th>LOWEST IN 24H</th>
                <th>HIGHEST IN 24H</th>
            </tr>
           {data.map((item)=> {
            return <tr>
                <td><img style={{width:'40px'}} src={item.image} alt={item.id} /></td>
                <td onClick={()=> handleClick(item.id)} id='name'>{item.name}</td>
                <td>{item.symbol.toUpperCase()}</td>
                <td>{item.current_price}</td>
                <td id='lowest'>{item.low_24h}</td>
                <td id='highest'>{item.high_24h}</td>
            </tr>
           })}
        </table>}
    </div>
  )
}

export default AllCryptos