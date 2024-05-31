import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LineChart from '../Chart/LineChart'

const SingleCoin = () => {

    const {id} = useParams()
    const [singleData, setSingleData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        setIsLoading(true)
    const response = fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    response.then(function(res){
        return res.json()
    })
    .then(function(data){
        setSingleData(data);
        setIsLoading(false)
    })

    }, [])

  return (
    <>
    {isLoading ? <span class="loader"></span> : <div>
        <h1>{singleData.name}</h1>
        <div style={{display:'flex', justifyContent:'space-around' ,alignItems:'center'}}>
            <img src={singleData.image?.large} alt="" />
            <p style={{width:'75%', textAlign:'left'}}>{singleData.description?.en}</p>
        </div>

        <LineChart/>
    </div>}
    </>
  )
}

export default SingleCoin