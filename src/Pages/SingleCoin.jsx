import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LineChart from '../Chart/LineChart'

const SingleCoin = () => {

    const {id} = useParams()
    const [singleData, setSingleData] = useState({})

    useEffect(()=> {

    const response = fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    response.then(function(res){
        return res.json()
    })
    .then(function(data){
        setSingleData(data);
    })

    }, [])

  return (
    <div>
        <h1>{singleData.name}</h1>
        <div style={{display:'flex', alignItems:'center'}}>
            <img src={singleData.image?.large} alt="" />
            <p style={{width:'80%', textAlign:'left'}}>{singleData.description?.en}</p>
        </div>

        <LineChart/>
    </div>
  )
}

export default SingleCoin